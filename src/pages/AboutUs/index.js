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

export default function AboutUs() {
  const { addToast } = useToast();
  const { language } = useLanguage();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  async function loadAboutUs() {
    setLoading(true);
    try {
      const response = await api.get("/textos/2");
      const { data } = response;
      setData({...data, ...{
        portuguese: data.portugues,
        spanish: data.espanhol,
        english: data.ingles,
      }});
    } catch (err) {
      addToast({
        type: "error",
        title: "Erro ao carregar Quem Somos"
      });
    }
    setLoading(false);
  }

  useEffect(() => {
    loadAboutUs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar
        selectedOption="aboutUs"
        title={navBar.aboutUsButton[language]}
        openMenu={openMenu} setOpenMenu={setOpenMenu}
      />
       <Cover open={openMenu} onClick={() => setOpenMenu(false)}/>
      <SideBar open={openMenu} activeOption="aboutUs"/>
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
                {data.fotos?.slice(0,2).map((foto) => (
                  <Picture src={foto.image_url} />
                ))}
              </PicturesContainer>
              <PicturesContainer length={data.fotos?.slice(2,4).length}>
                {data.fotos?.slice(2,4).map((foto) => (
                  <Picture src={foto.image_url} />
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
