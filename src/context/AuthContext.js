import React, { createContext, useCallback, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { routes } from "../constants/Languages";

import api from "../services/api";
import { useToast } from "./ToastContext";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const { addToast } = useToast();
  const history = useHistory();

  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("@laparcPatient:token");
    if (token) {
      return token;
    }
    return "";
  });
  const [refreshToken, setRefreshToken] = useState(() => {
    const refreshToken = localStorage.getItem("@laparcPatient:refreshToken");
    if (refreshToken) {
      return refreshToken;
    }
    return '';
  });
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("@laparcPatient:user");
    if (user) {
      return JSON.parse(user);
    }
    return {};
  });

  const signIn = useCallback(async (data, setLoading, language='portuguese') => {
    setLoading(true);
    try {
      const response = await api.post("/pacientes/login", data);
      const { token, refresh_token } = response.data[0];
      const user = response.data[1];
     
      addToast({
        type: "success",
        title: "Login efetuado com sucesso",
        description: `Bem vindo ao Laparc, ${user.nome}!`
      });
      localStorage.setItem("@laparcPatient:token", token);
      localStorage.setItem("@laparcPatient:refreshToken", refresh_token);
      localStorage.setItem("@laparcPatient:user", JSON.stringify(user));
      setToken(token);
      setRefreshToken(refreshToken);
      setUser(user);
      history.push(`${routes.profile[language]}`);
    } catch (err) {
      if (err.response?.data && err.response?.data?.error ) {
        if (err?.response?.data?.error?.includes("email ou senha incorretos")) {
          addToast({
            type: "error",
            title: "Erro ao entrar no aplicativo",
            description: "Endereço de email ou senha incorretos"
          });
        }
      } else {
        addToast({
          type: "error",
          title: "Erro ao entrar no aplicativo"
        });
      }
    }
    setLoading(false);
  }, [addToast, history, refreshToken]);

  const signOut = useCallback(() => {
    localStorage.removeItem("@laparcPatient:token");
    localStorage.removeItem("@laparcPatient:refreshToken");
    localStorage.removeItem("@laparcPatient:user");
    setToken("");
    setUser({});
    history.push("/");
  }, [history]);

  return (
    <AuthContext.Provider value={{ signIn, signOut, token, refreshToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
