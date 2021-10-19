import React from "react";
import { Switch, Route as ReactDOMRoute } from "react-router-dom";

import Route from "./Route";

import Home from "../pages/Home";
import News from "../pages/ContentsPages/News";
import Pubs from "../pages/ContentsPages/Pubs";
import OurStory from "../pages/OurStory";
import AboutUs from "../pages/AboutUs";
import Faq from "../pages/Faq";
import ContactUs from "../pages/ContactUs";
import Profile from "../pages/ProfilePages/Profile";

import Login from "../pages/AuthPages/Login";
import ForgotPassword from "../pages/AuthPages/ForgotPassword";
import RedefinePassword from "../pages/AuthPages/RedefinePassword";

import PdfPage from "../pages/PdfPage";

export default function Routes() {
  return (
    <Switch>
      <ReactDOMRoute exact path="/" component={Home} />

      <ReactDOMRoute path={["/noticias","/news"]} component={News} />
      <ReactDOMRoute path={["/publicacoes", "/publications", "/publicaciones"]} component={Pubs} />

      <ReactDOMRoute path={["/nossa-historia","/our-story", "/nuestra-historia"]} component={OurStory} />
      <ReactDOMRoute path={["/quem-somos","/about-us","/quienes-somos"]} component={AboutUs} />
      <ReactDOMRoute path={["/perguntas-frequentes","/common-questions", "/preguntas-frecuentes"]} component={Faq} />
      <ReactDOMRoute path={["/fale-conosco","/contact-us", "/hablar-con-nosotros"]} component={ContactUs} />
      <Route path={["/perfil", "/profile"]} component={Profile} isPrivate/>

      <ReactDOMRoute path={["/entrar", "/login", "/acceso"]} component={Login} />
      <ReactDOMRoute path={["/esqueci-senha", "/forgot-password", "/olvide-contrasena"]} component={ForgotPassword} />
      <ReactDOMRoute
        path={[
          "/redefinir-senha/:type/:token",
          "/redefine-password/:type/:token",
          "/redefinir-contrasena/:type/:token"
        ]}
        component={RedefinePassword}
      />

      <ReactDOMRoute path="/pdf/:type" component={PdfPage} />
    </Switch>
  );
}
