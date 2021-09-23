import React, { useState } from "react";
import Lottie from "react-lottie";

import {
  EditionDashboard,
  InputContainer,
  ButtonsContainer,
  CancelButton,
  EditButton
} from "./styles";
import api from "../../services/api";
import { animations } from "../../assets";
import { useToast } from "../../context/ToastContext";
import { useLanguage } from "../../context/LanguageContext";
import { profile } from "../../constants/Languages";

export default function EditPassword({ setEditPasswordMode }) {
  const { addToast } = useToast();
  const { language } = useLanguage();
  const [passwordData, setPasswordData] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  }

  function validatePasswordInputs() {
    const values = Object.values(passwordData);
    if (values.length < 3 || values.includes("")) {
      return true;
    } else {
      return false;
    }
  }

  async function handleSubmit() {
    if (passwordData.newPassword !== passwordData.reNewPassword) {
      addToast({
        type: "error",
        title: "Erro ao redefinir senha",
        description: "A confirmação da sua nova senha está diferente da senha"
      });
      return;
    }
    if (passwordData.newPassword.length < 6) {
      addToast({
        type: "error",
        title: "Erro ao redefinir senha",
        description: "A sua nova senha deve possuir no mínimo 6 caracteres"
      });
      return;
    } 
    setLoading(true);
    try {
      const data = {
        senha_atual: passwordData.password,
        senha: passwordData.newPassword
      };
      const response = await api.patch("/pacientes/alterar-senha", data);
      setEditPasswordMode(false);
      addToast({
        type: "success",
        title: "Senha alterada com sucesso!"
      });
    } catch (err) {
      addToast({
        type: "error",
        title: "Erro ao alterar senha"
      });
    }
    setLoading(false);
  }

  return (
    <EditionDashboard>
      <InputContainer>
        <p>{profile.currentPasswordLabel[language]}</p>
        <input name="password" type={'password'} onChange={e => handleChange(e)} />
      </InputContainer>
      <InputContainer marginTop={2.5}>
        <p>{profile.newPasswordLabel[language]}</p>
        <input name="newPassword" type={'password'} onChange={e => handleChange(e)} />
      </InputContainer>
      <InputContainer marginTop={2.5}>
        <p>{profile.confirmNewPasswordLabel[language]}</p>
        <input name="reNewPassword" type={'password'} onChange={e => handleChange(e)} />
      </InputContainer>
      <ButtonsContainer>
        <CancelButton onClick={() => setEditPasswordMode(false)}>
          <p>{profile.cancelButton[language]}</p>
        </CancelButton>
        <EditButton
          disabled={validatePasswordInputs() ? true : false}
          onClick={handleSubmit}
        >
          {loading ? (
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animations.loadingBalls
              }}
              height={35}
              width={30}
            />
          ) : (
            <p>{profile.editButton[language]}</p>
          )}
        </EditButton>
      </ButtonsContainer>
    </EditionDashboard>
  );
}
