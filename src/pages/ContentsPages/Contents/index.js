import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Lottie from "react-lottie";

import {
  Container,
  SectionOne,
  SectionTwo,
  button,
  LoadingContainer,
  Subtitle,
} from "./styles";
import { useLanguage } from "../../../context/LanguageContext";
import ContentCard from "../../../components/ContentCard";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { contents } from "../../../constants/Languages";
import api from "../../../services/api";
import { useToast } from "../../../context/ToastContext";
import { animations } from "../../../assets";

export default function Contents() {
  const { language } = useLanguage();
  const { addToast } = useToast();
  const [initialLoading, setInitialLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [newsIndexToShow, setNewsIndexToShow] = useState(0);
  const [loadingNews, setLoadingNews] = useState(false);
  const [totalOfNews, setTotalOfNews] = useState(null);
  const [pubs, setPubs] = useState([]);
  const [pubsIndexToShow, setPubsIndexToShow] = useState(0);
  const [loadingPubs, setLoadingPubs] = useState(false);
  const [totalOfPubs, setTotalOfPubs] = useState(null);

  const fakeNews = [
    {
      id: 1,
      admin_id: 56,
      file_name: null,
      noticia_url:
        "https://images.tcdn.com.br/img/img_prod/612671/po_bionutritivo_3_157_1_20190819215108.jpg",
      titulo: "Hello",
      tipo: "image",
    },
    {
      id: 2,
      admin_id: 63,
      file_name: null,
      noticia_url: "https://www.youtube.com/watch?v=_VdyJgAG83o",
      titulo: "como vc está?",
      tipo: "youtube",
    },
    {
      id: 3,
      admin_id: 63,
      file_name: null,
      noticia_url:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      titulo: "Laparc está lindo",
      tipo: "audio",
    },
    {
      id: 4,
      admin_id: 63,
      file_name: null,
      noticia_url:
        "https://storage-fluxo.nyc3.digitaloceanspaces.com/appcosmeticos/rotulometro.pdf",
      titulo: "lll",
      tipo: "pdf",
    },
    {
      id: 5,
      admin_id: 56,
      file_name: null,
      noticia_url:
        "https://a0.vnda.com.br/1200x/carenb/2020/08/31/20_8_0_008__M2_33801.jpg?1598917153",
      titulo: "Hello",
      tipo: "image",
    },
    {
      id: 6,
      admin_id: 63,
      file_name: null,
      noticia_url: "https://www.youtube.com/watch?v=_VdyJgAG83o",
      titulo: "como vc está?",
      tipo: "youtube",
    },
    {
      id: 7,
      admin_id: 63,
      file_name: null,
      noticia_url:
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      titulo: "Laparc está lindo",
      tipo: "audio",
    },
    {
      id: 8,
      admin_id: 63,
      file_name: null,
      noticia_url:
        "https://storage-fluxo.nyc3.digitaloceanspaces.com/appcosmeticos/rotulometro.pdf",
      titulo: "lll",
      tipo: "pdf",
    },
    {
      id: 9,
      admin_id: 63,
      file_name: null,
      noticia_url:
        "https://storage-fluxo.nyc3.digitaloceanspaces.com/appcosmeticos/rotulometro.pdf",
      titulo: "lll",
      tipo: "pdf",
    },
  ];

  function definePosition(index) {
    if (index === 0 || index === 4) {
      return "first";
    } else if (index === 3 || index === 7) {
      return "last";
    } else {
      return "default";
    }
  }

  const newsList = fakeNews
    .slice(newsIndexToShow, newsIndexToShow + 8)
    .map((newItem, index) => (
      <ContentCard
        key={newItem.id.toString()}
        data={{ ...newItem, ["category"]: "noticia" }}
        position={definePosition(index)}
      />
    ));

  const pubsList = pubs
    .slice(pubsIndexToShow, pubsIndexToShow + 4)
    .map((pub, index) => (
      <ContentCard
        key={pub.id.toString()}
        data={{ ...pub, ["category"]: "pub_cientifica" }}
        position={definePosition(index)}
      />
    ));

  async function loadNews() {
    setLoadingNews(true);
    try {
      const initialIndex = news.length;
      const response = await api.get(
        `/noticias/listar/${initialIndex}/${initialIndex + 4}`
      );
      setTotalOfNews(response.data[0].quantidade);
      news.length !== 0 && setNewsIndexToShow(newsIndexToShow + 4);
      setNews([...news, ...response.data[1]]);
    } catch (err) {
      addToast({
        type: "error",
        title: "Erro ao carregar notícias",
      });
    }
    setLoadingNews(false);
  }

  async function loadPubs() {
    setLoadingPubs(true);
    try {
      const initialIndex = pubs.length;
      const response = await api.get(
        `/pub_cientificas/listar/${initialIndex}/${initialIndex + 4}`
      );
      setTotalOfPubs(response.data[0].quantidade);
      pubs.length !== 0 && setPubsIndexToShow(pubsIndexToShow + 4);
      setPubs([...pubs, ...response.data[1]]);
    } catch (err) {
      addToast({
        type: "error",
        title: "Erro ao carregar Publicações científicas",
      });
    }
    setLoadingPubs(false);
  }

  function renderLoadMore(index, list, total) {
    if (index + 4 >= list.length) {
      if (list.length < total) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  function defineRightFunction(index, list, total, setIndex, loadFunction) {
    if (index + 4 >= list.length) {
      if (list.length < total) {
        return loadFunction();
      } else {
        return null;
      }
    } else {
      return setIndex(index + 4);
    }
  }

  useEffect(() => {
    setInitialLoading(true);
    Promise.all([loadNews(), loadPubs()]).then(() => {
      setInitialLoading(false);
    });
  }, []);

  return (
    <>
      <NavBar selectedOption="contents" title={contents.newsLabel[language]} />
      {initialLoading ? (
        <LoadingContainer>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animations.new,
            }}
            height={350}
            width={350}
          />
          <Subtitle>Carregando...</Subtitle>
        </LoadingContainer>
      ) : (
        <Container>
          <section>
            {newsIndexToShow !== 0 && (
              <button onClick={() => setNewsIndexToShow(newsIndexToShow - 4)}>
                <FiChevronLeft color="#000" size={40} />
              </button>
            )}
            <div>{newsList}</div>
            {renderLoadMore(newsIndexToShow, news, totalOfNews) && (
              <button
                onClick={() =>
                  defineRightFunction(
                    newsIndexToShow,
                    news,
                    totalOfNews,
                    setNewsIndexToShow,
                    loadNews
                  )
                }
                disabled={loadingNews}
              >
                <FiChevronRight color="#000" size={40} />
              </button>
            )}
          </section>
          {/*<SectionTwo>
            <h1>{contents.pubsLabel[language]}</h1>
            <section>
              {pubsIndexToShow !== 0 && (
                <button onClick={() => setPubsIndexToShow(pubsIndexToShow - 4)}>
                  <FiChevronLeft color="#000" size={40} />
                </button>
              )}
              {pubsList}
              {renderLoadMore(pubsIndexToShow, pubs, totalOfPubs) && (
                <button
                  onClick={() =>
                    defineRightFunction(
                      pubsIndexToShow,
                      pubs,
                      totalOfPubs,
                      setPubsIndexToShow,
                      loadPubs
                    )
                  }
                  disabled={loadingPubs}
                >
                  <FiChevronRight color="#000" size={40} />
                </button>
              )}
            </section>
                </SectionTwo>*/}
        </Container>
      )}
      <Footer />
    </>
  );
}
