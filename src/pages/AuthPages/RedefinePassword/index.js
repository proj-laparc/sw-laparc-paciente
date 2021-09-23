import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Lottie from "react-lottie";
import { FiEye, FiEyeOff } from "react-icons/fi";

import api from "../../../services/api";
import {
  Container,
  LogoLaparc,
  RedefinePasswordTitle,
  Inputs,
  InputContainer,
  InputType,
  PasswordContainer,
  PasswordInput,
  ConfirmationDescription,
  SubmitButton,
} from "./styles";
import { icons, animations } from "../../../assets";
import { useToast } from "../../../context/ToastContext";

export default function RefinePassword() {
  const history = useHistory();
  const [newPassword, setNewPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [reNewPassword, setReNewPassword] = useState("");
  const [showReNewPassword, setShowReNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { type, token } = useParams();
  const { addToast } = useToast();

  function validateInputs() {
    if (newPassword === "" || reNewPassword === "") {
      return true;
    } else if (loading) {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit() {
    if (newPassword !== reNewPassword) {
      addToast({
        type: "error",
        title: `Erro ao ${type === "forgot" ? "redefinir" : "definir"} senha`,
        description: "A confirmação da senha está diferente da senha",
      });
    } else if (newPassword.length < 6) {
      addToast({
        type: "error",
        title: `Erro ao ${type === "forgot" ? "redefinir" : "definir"} senha`,
        description: "A sua nova senha deve possuir no mínimo 6 caracteres",
      });
      return;
    } else {
      sendData();
    }
  }

  async function sendData() {
    setLoading(true);
    try {
      const data = {
        senha: newPassword,
      };
      const response =
        type === "forgot"
          ? await api.patch(`pacientes/redefinir-senha/${token}`, data)
          : await api.post(`pacientes/ativar/${token}`, data);
      addToast({
        type: "success",
        title: "Sua nova senha foi configurada com sucesso!",
        description: "Agora você já pode fazer seu login",
      });
      history.push("/");
    } catch (err) {
      addToast({
        type: "error",
        title: `Erro ao ${type === "forgot" ? "redefinir" : "definir"} senha`,
      });
    }
    setLoading(false);
  }
  return (
    <Container>
      <LogoLaparc src={icons.laparcLogo} />
      <RedefinePasswordTitle>
        {type === "forgot" ? "Redefinir senha" : "Redefinir senha"}
      </RedefinePasswordTitle>
      <Inputs>
        <InputContainer marginTop={15}>
          <InputType>Nova senha</InputType>
          <PasswordContainer>
            <PasswordInput
              placeholder="Insira sua senha"
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              style={{
                backgroundColor: "transparent",
                color: "#666666",
                size: "50px",
              }}
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </PasswordContainer>
        </InputContainer>
        <InputContainer marginTop={15}>
          <InputType>Confirmar nova senha</InputType>
          <PasswordContainer>
            <PasswordInput
              placeholder="Insira sua senha novamente"
              type={showReNewPassword ? "text" : "password"}
              value={reNewPassword}
              onChange={(e) => setReNewPassword(e.target.value)}
            />
            <button
              style={{
                backgroundColor: "transparent",
                color: "#666666",
                size: "50px",
              }}
              onClick={() => setShowReNewPassword(!showReNewPassword)}
            >
              {showReNewPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </PasswordContainer>
        </InputContainer>
      </Inputs>
      {type !== "forgot" && (
        <ConfirmationDescription>
          Ao clicar em Confirmar, você concorda com nossos{" "}
          <Link to={"/pdf/termsOfService"} target="_blank">
            Termos de Uso
          </Link>{" "}
          e com a nossa{" "}
          <Link to={"/pdf/privacyPolicy"} target="_blank">
            Política de Privacidade
          </Link>
          .
        </ConfirmationDescription>
      )}
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
          "Confirmar"
        )}
      </SubmitButton>
    </Container>
  );
}
