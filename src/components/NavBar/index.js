import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import HamburgerBtn from "../HamburgerBtn"
import { icons } from "../../assets";
import {
  Container,
  HeaderContainer,
  ButtonsContainer,
  ButtonContainer,
  SubOptions,
  SubOption,
  Button, 
  TitleContainer,
  SmallDevicesContainer
} from "./styles";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";
import { navBar, contents, routes } from "../../constants/Languages";
 
export default function NavBar({ selectedOption, title, noMenu, openMenu, setOpenMenu }) {
  const { token } = useAuth();
  const { language } = useLanguage();
  const history = useHistory();
  const [showSubOptions, setShowSubOptions] = useState(false);
  function isSelected(option) {
    if (option === selectedOption) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <Container>
        {!noMenu && (
          <HeaderContainer>
            <Button to="/">
              <img src={icons.navBarLogo} alt="Laparc Logo" />
            </Button>
            <ButtonsContainer>
              <ButtonContainer
                selected={isSelected("contents")}
                onMouseEnter={() => setShowSubOptions(true)}
                onMouseLeave={() => setShowSubOptions(false)}
              >
                <Button>{navBar.contentsButton[language]}</Button>
                {showSubOptions && (
                  <SubOptions>
                    <SubOption
                      onClick={() => history.push(routes.news[language])}
                      style={{ borderBottom: "1px solid #00000020" }}
                    > 
                      {contents.newsLabel[language]}
                    </SubOption>
                    <SubOption onClick={() => history.push(routes.pubs[language])}>
                      {contents.pubsLabel[language]}
                    </SubOption>
                  </SubOptions>
                )}
              </ButtonContainer>
              <ButtonContainer selected={isSelected("ourStory")}>
                <Button to={routes.ourStory[language]}>{navBar.ourStoryButton[language]}</Button>
              </ButtonContainer>
              <ButtonContainer selected={isSelected("aboutUs")}>
                <Button to={routes.aboutUs[language]}>{navBar.aboutUsButton[language]}</Button>
              </ButtonContainer>
              <ButtonContainer selected={isSelected("faq")}>
                <Button to={routes.faq[language]}>{navBar.faqButton[language]}</Button>
              </ButtonContainer>
              <ButtonContainer selected={isSelected("contactUs")}>
                <Button to={routes.contactUs[language]}>
                  {navBar.contactUsButton[language]}
                </Button>
              </ButtonContainer>
              {token ? (
                <ButtonContainer selected={isSelected("profile")}>
                  <Button to={routes.profile[language]}>{navBar.profileButton[language]}</Button>
                </ButtonContainer>
              ) : (
                <ButtonContainer selected={isSelected("login")}>
                    <Button to={routes.login[language]}>{navBar.loginButton[language]}</Button>
                </ButtonContainer>
              )}
            </ButtonsContainer>
          </HeaderContainer>
          
        )}
        {title && (
          <TitleContainer>
            <div>
              <h1>{title}</h1>
            </div>
          </TitleContainer>
        )}
      </Container>
    <SmallDevicesContainer>
        <HamburgerBtn
          isOpen={openMenu}
          open={openMenu}
          menuClicked={()=>setOpenMenu(!openMenu)}
          width={20}
          height={17}
          strokeWidth={2}
          rotate={0}
          color='#99a3ae'
          borderRadius={0}
          animationDuration={0.5}
        />
        {title &&
          <h4>{title}</h4>
        }
        <div></div>
    </SmallDevicesContainer>
    </>
  );
}
