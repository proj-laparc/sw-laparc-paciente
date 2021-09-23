import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import * as pdfjs from "pdfjs-dist/es5/build/pdf";
import { pdfjsworker } from "pdfjs-dist/es5/build/pdf.worker.entry";

import {
  ContentContainer,
  TitleContainer,
  PdfContainer,
  LoadingContainer,
  Subtitle,
  PaginationContainer,
} from "./styles";
import { animations } from "../../assets";
import Example from "../../assets/others/sample.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsworker;

export default function PdfViewer({ data }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setLoading(false);
    setNumPages(numPages);
  }

  function renderLoader() {
    return (
      <LoadingContainer>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animations.redLoadingBalls,
          }}
          height={60}
          width={60}
        />
        <Subtitle>Carregando...</Subtitle>
      </LoadingContainer>
    );
  }

  function renderError() {
    return (
      <LoadingContainer error>
        <HiOutlineEmojiSad size={60} color={"#323c47"} />
        <Subtitle style={{ marginTop: 10, color: "#323c47", fontSize: 11 }}>
          Erro ao carregar pdf...
        </Subtitle>
      </LoadingContainer>
    );
  }

  return (
    <ContentContainer>
      <TitleContainer>
        <h2>{data.titulo}</h2>
      </TitleContainer>
      <PdfContainer>
        <a
          href={data[`${data.category}_url`]}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Document
            error={renderError}
            loading={renderLoader}
            onLoadSuccess={onDocumentLoadSuccess}
            file={{
              url: data[`${data.category}_url`],
            }}
          >
            <Page pageNumber={pageNumber} height={220} />
          </Document>
        </a>
      </PdfContainer>
      {loading === false && (
        <PaginationContainer>
          {pageNumber > 1 && (
            <button onClick={() => setPageNumber(pageNumber - 1)}>
              <MdKeyboardArrowLeft color={"black"} />
            </button>
          )}
          <p>
            Página {pageNumber} de {numPages}
          </p>
          {pageNumber < numPages && (
            <button onClick={() => setPageNumber(pageNumber + 1)}>
              <MdKeyboardArrowRight color={"black"} />
            </button>
          )}
        </PaginationContainer>
      )}
    </ContentContainer>
  );
}
