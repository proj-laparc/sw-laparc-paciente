import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";

import {
  Container,
  Content,
  QuestionsDashboard,
  LoadingContainer,
  Subtitle
} from "./styles";
import NavBar from "../../components/NavBar";
import Cover from "../../components/Cover";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
import { useToast } from "../../context/ToastContext";
import { useLanguage } from "../../context/LanguageContext";
import api from "../../services/api";
import QuestionCard from "../../components/QuestionCard";
import { animations } from "../../assets";
import { faq } from "../../constants/Languages";

export default function Faq() {
  const { addToast } = useToast();
  const { language } = useLanguage();
  const [questions, setQuestions] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);
  const [loading, setLoading] = useState(true);

  async function loadQuestions() {
    try {
      const response = await api.get("/faqs/listar-todos");
      setQuestions(response.data);
    } catch (err) {
      addToast({
        type: "error",
        title: "Erro ao carregar perguntas"
      });
    }
    setLoading(false);
  }

  useEffect(() => {
    loadQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <NavBar
        selectedOption="faq"
        title={faq.title[language]}
        openMenu={openMenu} setOpenMenu={setOpenMenu}
      />
      <SideBar open={openMenu} activeOption="faq" />
      <Cover open={openMenu} onClick={() => setOpenMenu(false)} />

      <Content>
        <QuestionsDashboard>
          {loading ? (
            <LoadingContainer>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: animations.heart
                }}
                height={350}
                width={350}
              />
              <Subtitle>{faq.loadingText[language]}</Subtitle>
            </LoadingContainer>
          ) : (
            <section>
              {questions.map((question, index) => (
                <QuestionCard
                  key={question.id.toString()}
                  data={question}
                  index={index}
                />
              ))}
            </section>
          )}
        </QuestionsDashboard>
      </Content>
      <Footer />
    </Container>
  );
}
