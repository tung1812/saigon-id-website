import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import vi from "./vi.json";

const saved = localStorage.getItem("lang");
const fallbackLang = "vi"; // choose your default

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi }
    },
    lng: saved || fallbackLang,
    fallbackLng: fallbackLang,
    interpolation: { escapeValue: false }
  });

// keep <html lang="..."> in sync for accessibility/SEO
document.documentElement.setAttribute("lang", i18n.language);

i18n.on("languageChanged", (lng) => {
  document.documentElement.setAttribute("lang", lng);
  localStorage.setItem("lang", lng);
});

export default i18n;
