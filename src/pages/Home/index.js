import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Lottie from "react-lottie";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Cover from "../../components/Cover";
import SideBar from "../../components/SideBar";
import {
  Container,
  WelcomeSection,
  WelcomeContainer,
  FirstOptionContainer,
  ContentSection,
  NewsContainer,
  SecondOptionContainer,
  SectionOne,
  LoadingContainer,
  Cards,
  Subtitle,
} from "./styles";
import { useLanguage } from "../../context/LanguageContext";
import { useToast } from "../../context/ToastContext";
import { useAuth } from "../../context/AuthContext";
import { home, routes } from "../../constants/Languages";
import ContentCard from "../../components/ContentCard";
import api from "../../services/api";
import { animations } from "../../assets";

export default function Home() {
  const { language } = useLanguage();
  const { addToast } = useToast();
  const { token } = useAuth();
  const history = useHistory();
  const [initialLoading, setInitialLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [newsIndexToShow, setNewsIndexToShow] = useState(0);
  const [loadingNews, setLoadingNews] = useState(false);
  const [totalOfNews, setTotalOfNews] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  function definePosition(index) {
    switch (index) {
      case 0:
        return "first";
      case 3:
        return "last";
      default:
        return "default";
    }
  }

  const newsList = news
    .slice(newsIndexToShow, newsIndexToShow + 4)
    .map((newItem, index) => (
      <ContentCard
        key={newItem.id.toString()}
        data={{ ...newItem, "category": "noticia" }}
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
    loadNews().then(() => {
      setInitialLoading(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ( 
    <Container>
      <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <SideBar open={openMenu} />
      <Cover open={openMenu} onClick={() => setOpenMenu(false)}/>
      <WelcomeSection>
        <WelcomeContainer>
          <h1>{home.welcomeTitle[language]}</h1>
        </WelcomeContainer>
        <FirstOptionContainer>
          <h1>{home.academicPublicTitle[language]}</h1>
          <button onClick={() => history.push(routes.pubs[language])}>
            {home.clickHereButton[language]}
          </button>
        </FirstOptionContainer>
      </WelcomeSection>
      <ContentSection>
        <NewsContainer>
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
            <SectionOne>
              <h1>{home.newsLabel[language]}</h1>
              <section>
                {newsIndexToShow !== 0 && (
                  <button
                    onClick={() => setNewsIndexToShow(newsIndexToShow - 4)}
                  >
                    <FiChevronLeft color="#000" size={40} />
                  </button>
                )}
                <Cards>{newsList}</Cards>
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
            </SectionOne>
          )}
        </NewsContainer>
        <SecondOptionContainer>
          <div>
            <h1>{home.participantsTitle[language]}</h1>
            <h2>{home.testsResultsTitle[language]}</h2>
            <button
              onClick={() =>
                history.push(token ? routes.profile[language] : routes.login[language])
              }>
              {home.clickHereButton[language]}
            </button>
          </div>
        </SecondOptionContainer>
      </ContentSection>
      <Footer />
    </Container>
  );
}
