import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";

import {
  Container,
  InformationContainer,
  ContactsContainer,
  LanguagesContainer,
  LanguageButton,
  MainInformationContainer,
  RightMainInformation,
  LinksContainer,
  NationalContainer,
  InternationalContainer,
  Link,
} from "./styles";
import { icons } from "../../assets";
import { useLanguage } from "../../context/LanguageContext";
import { footer } from "../../constants/Languages";

export default function Footer() {
  const { language, changeLanguage } = useLanguage();

  const nationalSubtitles = [
    {
      id: 1,
      name: {
        portuguese: "Sociedade Brasileira de Cardiologia",
        english: "Brazilian Society of Cardiology",
        spanish: "Sociedad Brasileña de Cardiología",
      },
      link: "https://www.portal.cardiol.br/",
    },
    {
      id: 2,
      name: {
        portuguese: "Sociedade Brasileira de Hipertensão",
        english: "Brazilian Society of Hypertension",
        spanish: "Sociedad Brasileña de Hipertensión",
      },
      link: "https://www.sbh.org.br/",
    },
    {
      id: 3,
      name: {
        portuguese: "Associação Brasileira de Saúde Coletiva",
        english: "Brazilian Association of Public Health",
        spanish: "Asociación Brasileña de Salud Pública",
      },
      link: "https://www.abrasco.org.br/site/",
    },
    {
      id: 4,
      name: {
        portuguese:
          "Associação Brasileira para Estudo de Obesidade e Síndrome Metabólica",
        english:
          "Brazilian Association for the Study of Obesity and Metabolic Syndrome",
        spanish:
          "Asociación Brasileña para el Estudio de la Obesidad y el Síndrome Metabólico",
      },
      link: "https://abeso.org.br/",
    },
    {
      id: 5,
      name: {
        portuguese: "Sociedade Brasileira de Endocrinologia e Metabologia",
        english: "Brazilian Society of Endocrinology and Metabology",
        spanish: "Sociedad Brasileña de Endocrinología y Metabología",
      },
      link: "https://www.endocrino.org.br/",
    },
    {
      id: 6,
      name: {
        portuguese: "Sociedade Brasileira de Nefrologia",
        english: "Brazilian Society of Nephrology",
        spanish: "Sociedad Brasileña de Nefrología",
      },
      link: "https://www.sbn.org.br/",
    },
  ];

  const internationalSubtitles = [
    {
      id: 1,
      name: {
        portuguese: "Sociedade Europeia de Hipertensão",
        english: "European Society of Hypertension",
        spanish: "Sociedad Europea de Hipertensión",
      },
      link: "https://www.eshonline.org/",
    },
    {
      id: 2,
      name: {
        portuguese: "Sociedade Americana de Nefrologia",
        english: "American Society of Nephrology",
        spanish: "Sociedad Americana de Nefrología",
      },
      link: "https://www.asn-online.org/",
    },
    {
      id: 3,
      name: {
        portuguese: "Associação Americana do Coração",
        english: "American Heart Association",
        spanish: "Asociación Americana del Corazón",
      },
      link: "https://www.heart.org/",
    },
    {
      id: 4,
      name: {
        portuguese: "Sociedade Europeia de Cardiologia",
        english: "European Society of Cardiology",
        spanish: "Sociedad Europea de Cardiología",
      },
      link: "https://www.escardio.org/",
    },
    {
      id: 5,
      name: {
        portuguese: "Sociedade Internacional de Hipertensão",
        english: "International Hypertension Society",
        spanish: "Sociedad Internacional de la Hipertensión",
      },
      link: "https://ish-world.com/",
    },
    {
      id: 6,
      name: {
        portuguese: "Sociedade Argentina de Hipertensão",
        english: "Argentine Society of Hypertension",
        spanish: "Sociedad Argentina de Hipertensión Arterial",
      },
      link: "https://www.saha.org.ar/",
    },
  ]; 

  return (
    <Container>
      <MainInformationContainer>
        <InformationContainer>   
         <h3>{footer.informationText[language]}</h3>
        </InformationContainer>
        <RightMainInformation>
          <ContactsContainer>
          <div>
            <FiPhone size={22.5} color={"#fff"} />
            <h3>(21) 96508-7705</h3>
          </div>
          <div>
            <FiMail size={22.5} color={"#fff"} />
            <h3>laparc.unesa@gmail.com</h3>
          </div>
        </ContactsContainer>
          <LanguagesContainer>
          <LanguageButton
            onClick={() => changeLanguage("portuguese")}
            enabled={language === "portuguese"}
          >
            <img src={icons.brazilian} alt="brazilian" />
          </LanguageButton>
          <LanguageButton
            onClick={() => changeLanguage("spanish")}
            enabled={language === "spanish"}
          >
            <img src={icons.spanish} alt="spanish" />
          </LanguageButton>
          <LanguageButton
            onClick={() => changeLanguage("english")}
            enabled={language === "english"}
          >
            <img src={icons.english} alt="english" />
          </LanguageButton>
        </LanguagesContainer>
        </RightMainInformation>
      </MainInformationContainer>
      <LinksContainer>
        <h1>{footer.title[language]}</h1>
        <section>
          <NationalContainer>
            <h2>{footer.nationalSubtitle[language]}</h2>
            <ul>
              {nationalSubtitles.map((subtitle) => (
                <li key={subtitle.id.toString()}>
                  <h3>
                    
                    <Link href={subtitle.link}>{subtitle.name[language]}</Link>
                  </h3>
                </li>
              ))}
            </ul>
          </NationalContainer>
          <InternationalContainer>
            <h2>{footer.internationalSubtitle[language]}</h2>
            <ul>
              {internationalSubtitles.map((subtitle) => (
                <li key={subtitle.id.toString()}>
                  <h3>
                   
                    <Link href={subtitle.link}> {subtitle.name[language]}</Link>
                  </h3>
                </li>
              ))}
            </ul>
          </InternationalContainer>
        </section>
      </LinksContainer>
    </Container>
  );
}
 