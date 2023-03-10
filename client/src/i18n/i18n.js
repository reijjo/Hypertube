import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./en.json";
import fiTranslations from "./fi.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslations,
            },
            fi: {
                translation: fiTranslations,
            },
        },
        lng: "en",
        fallbackLng: "fi",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;