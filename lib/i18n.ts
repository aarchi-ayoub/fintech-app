import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '@/locales/en/common.json';
import enHome from '@/locales/en/home.json';
import frCommon from '@/locales/fr/common.json';
import frHome from '@/locales/fr/home.json';

const deviceLang = getLocales()[0]?.languageCode ?? 'en';
const supportedLangs = ['en', 'fr'];
const initialLang = supportedLangs.includes(deviceLang) ? deviceLang : 'en';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources: {
    en: { common: enCommon, home: enHome },
    fr: { common: frCommon, home: frHome },
  },
  lng: initialLang,
  fallbackLng: 'en',
  defaultNS: 'common',
  interpolation: { escapeValue: false },
});

export default i18n;
