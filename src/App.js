import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";
import Routes from "./routes";
import AppProvider from "./context";
import "./styles/global.css";

import PdfPage from "./pages/PdfPage";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
