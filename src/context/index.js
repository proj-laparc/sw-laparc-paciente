import React from "react";

import { AuthProvider } from "./AuthContext";
import { ToastProvider } from "./ToastContext";
import { LanguageProvider } from "./LanguageContext";

export default function AppProvider({ children }) {
  return (
    <LanguageProvider>
      <ToastProvider>
        <AuthProvider>{children}</AuthProvider>
      </ToastProvider>
    </LanguageProvider>
  );
}
