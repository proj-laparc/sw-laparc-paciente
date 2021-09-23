import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const language = localStorage.getItem("@laparcPatient:language");
    if (language) {
      return language;
    }
    return "portuguese";
  });
  const changeLanguage = (language) => {
    localStorage.setItem("@laparcPatient:language", language);
    setLanguage(language)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useToast must be used within a LanguageProvider");
  }
  return context;
}
