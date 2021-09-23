import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Lottie from "react-lottie";

import { Container, DashBoard, LoadingContainer, Subtitle,InnerContent, Content, ArrowBtn, LoadMoreBtn, DashBoardSmallDevices } from "../styles";
import { useLanguage } from "../../../context/LanguageContext";
import ContentCard from "../../../components/ContentCard";
import NavBar from "../../../components/NavBar";
import Cover from "../../../components/Cover";
import SideBar from "../../../components/SideBar";
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
  const [openMenu, setOpenMenu] = useState(false);

  function definePosition(index) {
    if (index === 0 || index === 4) {
      return "first";
    } else if (index === 3 || index === 7) {
      return "last";
    } else {
      return "default";
    }
  }

  const newsList = news
    .slice(newsIndexToShow, newsIndexToShow + 9)
    .map((newItem, index) => (
      <ContentCard
        key={newItem.id.toString()}
        data={{ ...newItem, "category": "noticia" }}
        position={definePosition(index)}
      />
    ));
    const newsListSmallDevices = news
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
        `/noticias/listar/${initialIndex}/${initialIndex + 9}`
      );
      setTotalOfNews(response.data[0].quantidade);
      news.length !== 0 && setNewsIndexToShow(newsIndexToShow + 9);
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
    if (index + 9 >= list.length) {
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
    if (index + 9 >= list.length) {
      if (list.length < total) {
        return loadFunction();
      } else {
        return null;
      }
    } else {
      return setIndex(index + 9);
    }
  }

  useEffect(() => {
    loadNews().then(() => {
      setInitialLoading(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container> 
      <NavBar selectedOption="contents" title={contents.newsLabel[language]}
        openMenu={openMenu} setOpenMenu={setOpenMenu}
        />
        <SideBar open={openMenu} activeOption="contents" activeSubOption="news"/>
        <Cover open={openMenu} onClick={() => setOpenMenu(false)}/>
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
        <Content>  
          <InnerContent>
            {newsIndexToShow !== 0 && (
              <ArrowBtn onClick={() => setNewsIndexToShow(newsIndexToShow - 9)}>
                <FiChevronLeft color="#000" size={40} />
              </ArrowBtn>
            )}
              <DashBoard>{newsList}</DashBoard>
              <DashBoardSmallDevices>{newsListSmallDevices}</DashBoardSmallDevices>
            {renderLoadMore(newsIndexToShow, news, totalOfNews) && (
              <ArrowBtn
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
              </ArrowBtn>
            )}
            </InnerContent>
            {renderLoadMore(newsIndexToShow, news, totalOfNews) && (
              <LoadMoreBtn
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
                {contents.loadMore[language]}
              </LoadMoreBtn>)}
          </Content>
      )}
      <Footer />
    </Container>
  );
}
