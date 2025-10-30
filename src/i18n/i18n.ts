// libraries
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// languages
import ru from "./../assets/locales/ru.json";
import kz from "./../assets/locales/kz.json";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { common: ru },
      kz: { common: kz },
    },
    fallbackLng: "ru",
    supportedLngs: ["ru", "kz",],
    defaultNS: "common",
    ns: ["common"],
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lng",
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false }
  });

export default i18n;
