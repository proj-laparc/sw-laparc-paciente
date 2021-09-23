import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {Page } from "react-pdf";
import Lottie from "react-lottie";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import * as pdfjs from "pdfjs-dist/es5/build/pdf";
import { pdfjsworker } from "pdfjs-dist/es5/build/pdf.worker.entry";

import {
  Container,
  Dashboard,
  PdfContainer,
  LoadingContainer,
  Subtitle,
  PaginationContainer,
  StyledDocument
} from "./styles";
import { animations, others } from "../../assets";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsworker;

export default function PdfViewer({ pdfType, title }) {
  const { type } = useParams();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  function defineData() {
    // eslint-disable-next-line default-case
    switch (type) {
      case "privacyPolicy":
        return {
          pdfType: "privacyPolicy",
          title: "Política de Privacidade",
        };
      case "termsOfService":
        return {
          pdfType: "termsOfService",
          title: "Termos de Serviço",
        };
    }
  }

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
          height={125}
          width={125}
        />
        <Subtitle>Carregando...</Subtitle>
      </LoadingContainer>
    );
  }

  function renderError() {
    return (
      <LoadingContainer error>
        <HiOutlineEmojiSad size={150} color={"#323c47"} />
        <Subtitle style={{ marginTop: 22, color: "#323c47" }}>
          Erro ao carregar pdf...
        </Subtitle>
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <Dashboard loading={loading}>
        <PdfContainer>
          <StyledDocument
            error={renderError}
            loading={renderLoader}
            onLoadSuccess={onDocumentLoadSuccess}
            file={others[defineData().pdfType]}
          >
            <Page pageNumber={pageNumber} />
          </StyledDocument>
        </PdfContainer>
        {!loading && (
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
      </Dashboard>
    </Container>
  );
}
