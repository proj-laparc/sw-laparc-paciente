import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Lottie from "react-lottie";
import { FiArrowLeft } from "react-icons/fi";

import {
  Container,
  LogoLaparc,
  ForgotPasswordTitle,
  ForgotPasswordSubtitle,
  InputContainer,
  InputType,
  Input,
  SubmitButton,
  BackButton,
} from "./styles";
import { icons, animations } from "../../../assets";
import { useToast } from "../../../context/ToastContext";
import { useLanguage } from "../../../context/LanguageContext";
import api from "../../../services/api";
import { forgotPassword, routes } from "../../../constants/Languages";

export default function ForgotPassword() {
  const history = useHistory();
  const { addToast } = useToast();
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    try {
      const data = {
        email,
        link: `https://laparc.com.br${routes.redefinePassword[language]}/active/`,
      };
      await api.post("/pacientes/esqueci-minha-senha", data);
      addToast({
        type: "info",
        title:
          "Um email foi enviado com as informações para a redefinição de senha",
      });
      history.push("/");
    } catch (err) {
      addToast({
        type: "error",
        title: "Erro ao redefinir senha",
      });
    }
    setLoading(false);
  }

  function validateInputs() {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      return true;
    } else if (loading) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <Container>
      <BackButton to={routes.login[language]}>
        <FiArrowLeft size={40} color="#404040" />
      </BackButton>
      <LogoLaparc src={icons.laparcLogo} />
      <ForgotPasswordTitle>
        {forgotPassword.title[language]}
      </ForgotPasswordTitle>
      <ForgotPasswordSubtitle>
        {forgotPassword.subtitle[language]}
      </ForgotPasswordSubtitle>
      <InputContainer marginTop={5}>
        <InputType>{forgotPassword.email[language]}</InputType>
        <Input
          placeholder={forgotPassword.enterEmailPlaceholder[language]}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputContainer>
      <SubmitButton
        type="submit"
        onClick={handleSubmit}
        disabled={validateInputs() ? true : false}
      >
        {loading ? (
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animations.loadingBalls,
            }}
            height={50}
            width={50}
          />
        ) : (
          forgotPassword.submitButton[language]
        )}
      </SubmitButton>
    </Container>
  );
}
