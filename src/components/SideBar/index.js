import React from 'react';

import {
  Container,
  TitleContainer,
  SideBarContainer,
  StyledLink
} from './styles';

import SideBarOption from '../SideBarOption';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from "../../context/LanguageContext";
import { navBar, contents, routes } from "../../constants/Languages";
export default function SideBar({ activeOption, activeSubOption, open}) {
  const { signOut, user } = useAuth();
  const { language } = useLanguage();
  function isActive(icon) {
    if (activeOption === icon) {
      return true;
    }
  }

  const contentsSubOptions = [
    {
      id: 1,
      title: contents.newsLabel[language],
      route: routes.news[language],
      name: 'news',
    },
    {
      id: 2,
      title:contents.pubsLabel[language],
      route: routes.pubs[language],
      name: 'scientificPubs',
    },
  ];
  return (
    <Container open={open}>
      <TitleContainer open={open}>
        <StyledLink to="/">
          <h1>LapARC</h1>
        </StyledLink>
        
        
      </TitleContainer>
      
        <SideBarContainer>
          
          <SideBarOption
            title={navBar.contentsButton[language]}
            icon="contents"
            stroke={true}
            active={isActive('contents')}
            activeSubOption={activeSubOption}
            subOptions={contentsSubOptions}
        />
          <SideBarOption
            title={navBar.ourStoryButton[language]}
            route={routes.ourStory[language]}
            icon="folder"
            fill={true}
            active={isActive('ourStory')}
          />
          <SideBarOption
            title={navBar.aboutUsButton[language]}
            route={routes.aboutUs[language]}
            icon="admin"
            fill={true}
            active={isActive('aboutUs')}
          />
          <SideBarOption
            title={navBar.faqButton[language]}
            route={routes.faq[language]}
            icon="faq"
            stroke={true}
            active={isActive('faq')}
          />
          
          <SideBarOption
            title={navBar.contactUsButton[language]}
            route={routes.contactUs[language]}
            icon="contactUs"
            fill={true}
            active={isActive('contactUs')}
        />
          {Object.keys(user).length !== 0 ?
            <>
              <SideBarOption
                  title={navBar.profileButton[language]}
                  icon="patients"
                  route={routes.profile[language]}
                  active={isActive('profile')}
                  fill={true} />
              <button onClick={signOut}>
              <SideBarOption title={navBar.logoutButton[language]} icon="logout" fill={true} />
              </button>
            </>:
               
              <SideBarOption
                title={navBar.loginButton[language]}
                icon="patients"
                route={routes.login[language]}
                active={isActive('login')}
                fill={true} />
                 
            }
        </SideBarContainer>
        
    </Container>
  );
}
