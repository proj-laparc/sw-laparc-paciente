import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";

import {
  Dashboard,
  Description,
  PicturesContainer,
  Picture,
  LoadingContainer,
  Subtitle,
  Container
} from "./styles";
import NavBar from "../../components/NavBar";
import Cover from "../../components/Cover";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
import { useLanguage } from "../../context/LanguageContext";
import { useToast } from "../../context/ToastContext";
import api from "../../services/api";
import { animations } from "../../assets";
import { navBar } from "../../constants/Languages";

export default function OurStory() {
  const { addToast } = useToast();
  const { language } = useLanguage();
  const [data, setData] = useState({});
  const [openMenu, setOpenMenu] = useState(false);
  const [loading, setLoading] = useState(true);

  async function loadOurStory() {
    setLoading(true);
    try {
      const response = await api.get("/textos/5");
      const { data } = response;
      setData({...data, ...{
        portuguese: data.portugues,
        spanish: data.espanhol,
        english: data.ingles,
      }});
    } catch (err) {
      addToast({
        type: "error",
        title: "Erro ao carregar Nossa História"
      });
    }
    setLoading(false);
  }

  useEffect(() => {
    loadOurStory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar
        selectedOption="ourStory"
        title={navBar.ourStoryButton[language]}
        openMenu={openMenu} setOpenMenu={setOpenMenu}
      />
      <SideBar open={openMenu} activeOption="ourStory"/>
      <Cover open={openMenu} onClick={() => setOpenMenu(false)}/>
      <Container> 
        {loading ? (
          <LoadingContainer>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animations.doctor
              }}
              height={450}
              width={450}
            />
            <Subtitle>Carregando...</Subtitle>
          </LoadingContainer>
        ) : (
          <Dashboard>
            <Description>
              <h3>{data[language]}</h3>
            </Description>
            <div style={{marginTop: 20}}>
              <PicturesContainer length={data.fotos?.slice(0,2).length}>
                {data.fotos?.slice(0,2).map((foto, index) => (
                  <Picture src={foto.image_url} key={index}/>
                ))}
              </PicturesContainer>
              <PicturesContainer length={data.fotos?.slice(2,4).length}>
                {data.fotos?.slice(2,4).map((foto,index) => (
                  <Picture src={foto.image_url} key={index}/>
                ))}
              </PicturesContainer>
            </div>
          </Dashboard>
        )}
      </Container>
      <Footer />
    </>
  );
}
