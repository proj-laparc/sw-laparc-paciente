import React, { useState } from "react";
import Lottie from "react-lottie";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { useAuth } from "../../../context/AuthContext";
import {
  Container,
  Content,
  ArcosImage,
  MainLogin,
  LogoLaparc,
  InputType,
  InputContainer,
  Inputs,
  Input,
  PasswordInput,
  PasswordContainer,
  LoginButton,
  ForgotPassword,
  ForgotPasswordContainer,
} from "./styles";
import { images, icons, animations } from "../../../assets";
import NavBar from "../../../components/NavBar";
import Cover from "../../../components/Cover";
import SideBar from "../../../components/SideBar";
import { useLanguage } from "../../../context/LanguageContext";
import { login, routes } from "../../../constants/Languages";
import Footer from "../../../components/Footer";

export default function Login() {
  const { signIn } = useAuth();
  const { language } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function validateInputs() {
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (password === "" || !regex.test(email)) {
      return true;
    } else if (loading) {
      return true;
    } else {
      return false;
    }
  }

  function handleSubmit() {
    const data = {
      email,
      senha: password,
    };
    signIn(data, setLoading);
  }
 
  return (
    <Container>
      <NavBar selectedOption="login"
        openMenu={openMenu} setOpenMenu={setOpenMenu}
        />
        <SideBar open={openMenu} activeOption="login"/>
        <Cover open={openMenu} onClick={() => setOpenMenu(false)}/>
      <Content>
        <ArcosImage src={images.arcosDaLapa} alt="Arcos da Lapa" />
        <MainLogin>
          <LogoLaparc src={icons.laparcLogo} alt="Logo laparc" />
          <Inputs>
            <InputContainer>
              <InputType>{login.email[language]}</InputType>
              <Input
                placeholder={login.enterEmailPlaceholder[language]}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputContainer>
            <InputContainer marginTop={15}>
              <InputType>{login.password[language]}</InputType>
              <PasswordContainer>
                <PasswordInput
                  placeholder={login.enterPasswordPlaceholder[language]}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "#666666",
                    size: "50px",
                  }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </PasswordContainer>
            </InputContainer>
          </Inputs>
          <LoginButton
            type="submit"
            onClick={handleSubmit}
            disabled={validateInputs()}
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
              login.loginButton[language]
            )}
          </LoginButton>
          <ForgotPasswordContainer to={routes.forgotPassword[language]}>
            <ForgotPassword>
              {login.forgotPasswordPlaceholder[language]}
            </ForgotPassword>
          </ForgotPasswordContainer>
        </MainLogin>
      </Content>
      <Footer />
    </Container>
  );
}
