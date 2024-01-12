// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import enTranslation from "../src/assets/translations/en.json"; // English
import esTranslation from "../src/assets/translations/es.json"; // espanish

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
  lng: "en", // Set the default language
  fallbackLng: "en", // Fallback language in case a translation is missing
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
