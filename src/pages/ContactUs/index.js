import React, { useState } from "react";
import Lottie from "react-lottie";
import { ImWhatsapp } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import emailjs from "emailjs-com";

import {
  Container,
  Dashboard,
  ContactsContainer,
  Content,
  MessageContainer,
  InputsContainer,
  SubmitButton,
} from "./styles";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Cover from "../../components/Cover";
import SideBar from "../../components/SideBar";
import { useToast } from "../../context/ToastContext";
import { useLanguage } from "../../context/LanguageContext";
import { icons, animations } from "../../assets";
import { contactUs } from "../../constants/Languages";

export default function ContactUs() {
  const { addToast } = useToast();
  const { language } = useLanguage();
  const [emailData, setEmailData] = useState({});
  const [loading, setLoading] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const contacts = [
    {
      id: 1,
      title: {
        portuguese: "Contato por Whatsapp e Telefone",
        english: "Contact by Whatsapp and Phone",
        spanish: "Contacto por Whatsapp y Teléfono",
      },
      icon: "FiPhone",
      content: "(21) 96508-7705",
    },
    {
      id: 2,
      title: {
        portuguese: "Contato por E-mail",
        english: "Contact by Email",
        spanish: "Contacto por Correo Electrónico",
      },
      icon: "HiOutlineMail",
      content: "laparc.unesa@gmail.com",
    },
  ];
  const inputs = [
    {
      id: 1,
      name: {
        portuguese: "Nome",
        english: "Name",
        spanish: "Nombre",
      },
      placeholder: {
        portuguese: "Insira seu nome",
        english: "Enter your name",
        spanish: "Introducir su nombre",
      },
      type: "name",
    },
    {
      id: 2,
      name: {
        portuguese: "E-mail",
        english: "Email",
        spanish: "Correo Electrónico",
      },
      placeholder: {
        portuguese: "Insira seu e-mail",
        english: "Enter your email",
        spanish: "Introducir su correo electrónico",
      },
      type: "email",
    },
    {
      id: 3,
      name: {
        portuguese: "Assunto",
        english: "Subject",
        spanish: "Tema",
      },
      placeholder: {
        portuguese: "Insira o assunto",
        english: "Enter the subject",
        spanish: "Introducir el tema",
      },
      type: "subject",
    },
    {
      id: 4,
      name: {
        portuguese: "Mensagem",
        english: "Message",
        spanish: "Mensaje",
      },
      placeholder: {
        portuguese: "Insira a mensagem",
        english: "Enter the message",
        spanish: "Introducir el mensaje",
      },
      type: "body",
    },
  ];

  function renderIcon(name) {
    switch (name) {
      case "ImWhatsapp":
        return <ImWhatsapp size={22} color={"#000000"} />;
      case "HiOutlineMail":
        return <HiOutlineMail size={22} color={"#000000"} />;
      case "FiPhone":
        return <FiPhone size={22} color={"#000000"} />;
    }
  }

  function handleChange(e, key) {
    const value = e.target.value;
    setEmailData({ ...emailData, [key]: value });
  }

  async function sendEmail() {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(emailData.email)) {
      addToast({
        type: "error",
        title: "E-mail inválido",
        description: "O endereço de e-mail não é válido",
      });
      return;
    }
    setLoading(true);
    const data = {
      subject: emailData.subject,
      userName: emailData.name,
      message: emailData.body,
      userEmail: emailData.email,
    };
    await emailjs.send(
      "service_tiyjtk8",
      "template_z19p1pm",
      data,
      "user_uE2VirNf0x83U0hKXVBjb"
    );
    const newEmailData = { subject: "", name: "", body: "", email: "" };
    setEmailData({ ...emailData, ...newEmailData });
    addToast({
      type: "success",
      title: "E-mail enviado com sucesso!",
      description: "Em breve o Laparc irá te mandar uma resposta!",
    });
    setLoading(false);
  }

  function validateInputs() {
    const requiredKeys = ["name", "subject", "email", "body"];
    if (loading) {
      return true;
    } else if (
      !requiredKeys.every((key) => key in emailData && emailData[key] !== "")
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Container>
      <NavBar
        selectedOption="contactUs"
        title={contactUs.title[language]}
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
      />
      <SideBar open={openMenu} activeOption="contactUs" />
      <Cover open={openMenu} onClick={() => setOpenMenu(false)} />
      <Dashboard>
        <ContactsContainer>
          {contacts.map((contact, index) => (
            <li key={contact.id.toString()}>
              <h1>{contact.title[language]}</h1>
              <Content>
                {renderIcon(contact.icon)}
                <h2>{contact.content}</h2>
              </Content>
              {!(index === contacts.length - 1) && <img src={icons.dots} />}
            </li>
          ))}
        </ContactsContainer>
        <MessageContainer>
          <h1>{contactUs.subtitle[language]}</h1>
          <InputsContainer>
            {inputs.map((input, index) => (
              <li key={input.id.toString()}>
                <h2>{input.name[language]}</h2>
                {index !== inputs.length - 1 ? (
                  <input
                    placeholder={input.placeholder[language]}
                    value={emailData[input.type]}
                    onChange={(e) => handleChange(e, input.type)}
                  />
                ) : (
                  <textarea
                    placeholder={input.placeholder[language]}
                    value={emailData[input.type]}
                    onChange={(e) => handleChange(e, input.type)}
                  />
                )}
              </li>
            ))}
            <SubmitButton
              disabled={validateInputs() ? true : false}
              onClick={sendEmail}
            >
              {loading ? (
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: animations.loadingBalls,
                  }}
                  height={35}
                  width={30}
                />
              ) : (
                contactUs.submitButton[language]
              )}
            </SubmitButton>
          </InputsContainer>
        </MessageContainer>
      </Dashboard>
      <Footer />
    </Container>
  );
}
