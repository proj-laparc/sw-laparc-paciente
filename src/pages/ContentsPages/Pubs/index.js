import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Lottie from "react-lottie";

import { Container, DashBoard, LoadingContainer, Subtitle,InnerContent, Content, ArrowBtn, LoadMoreBtn, DashBoardSmallDevices } from "../styles";
import { useLanguage } from "../../../context/LanguageContext";
import ContentCard from "../../../components/ContentCard";
import Cover from "../../../components/Cover";
import SideBar from "../../../components/SideBar";
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
  const [pubs, setPubs] = useState([]);
  const [pubsIndexToShow, setPubsIndexToShow] = useState(0);
  const [loadingPubs, setLoadingPubs] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [totalOfPubs, setTotalOfPubs] = useState(null);


  function definePosition(index) {
    if (index === 0 || index === 4) {
      return "first";
    } else if (index === 3 || index === 7) {
      return "last";
    } else {
      return "default";
    }
  }

  const pubsList = pubs
    .slice(pubsIndexToShow, pubsIndexToShow + 8)
    .map((pub, index) => (
      <ContentCard
        key={pub.id.toString()}
        data={{ ...pub, "category": "pub_cientifica" }}
        position={definePosition(index)}
      />
    ));
    const pubsListSmallDevices = pubs
    .map((pub, index) => (
      <ContentCard
        key={pub.id.toString()}
        data={{ ...pub, "category": "pub_cientifica" }}
        position={definePosition(index)}
      />
    ));

  async function loadPubs() {
    setLoadingPubs(true);
    try {
      const initialIndex = pubs.length;
      const response = await api.get(
        `/pub_cientificas/listar/${initialIndex}/${initialIndex + 8}`
      );
      setTotalOfPubs(response.data[0].quantidade);
      pubs.length !== 0 && setPubsIndexToShow(pubsIndexToShow + 8);
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
    if (index + 8 >= list.length) {
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
    if (index + 8 >= list.length) {
      if (list.length < total) {
        return loadFunction();
      } else {
        return null;
      }
    } else {
      return setIndex(index + 8);
    }
  }

  useEffect(() => {
    loadPubs().then(() => {
      setInitialLoading(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <NavBar selectedOption="contents" title={contents.pubsLabel[language]}
        openMenu={openMenu} setOpenMenu={setOpenMenu}
        />
        <SideBar open={openMenu} activeOption="contents" activeSubOption="scientificPubs"/>
        <Cover open={openMenu} onClick={() => setOpenMenu(false)}/>
      {initialLoading ? (
        <LoadingContainer>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animations.pub,
            }}
            height={350}
            width={350}
          />
          <Subtitle>Carregando...</Subtitle>
        </LoadingContainer>
      ) : (
        <Content>
            <InnerContent>
              {pubsIndexToShow !== 0 && (
                <ArrowBtn onClick={() => setPubsIndexToShow(pubsIndexToShow - 8)}>
                  <FiChevronLeft color="#000" size={40} />
                </ArrowBtn>
              )}
              <DashBoard>{pubsList}</DashBoard>
              <DashBoardSmallDevices>{pubsListSmallDevices}</DashBoardSmallDevices>
              {renderLoadMore(pubsIndexToShow, pubs, totalOfPubs) && (
                <ArrowBtn
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
                </ArrowBtn>
                  )}
            </InnerContent>
            {renderLoadMore(pubsIndexToShow, pubs, totalOfPubs) && (
              <LoadMoreBtn
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
                {contents.loadMore[language]}
              </LoadMoreBtn>)}
        </Content>
      )}
      <Footer />
    </Container>
  );
}
