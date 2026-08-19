import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getSupportedLangs, loadLocales } from '@/lib/loadLocales';

const deviceLang = getLocales()[0]?.languageCode ?? 'en';
const supportedLangs = getSupportedLangs();
const initialLang = supportedLangs.includes(deviceLang) ? deviceLang : 'en';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources: loadLocales(),
  lng: initialLang,
  fallbackLng: 'en',
  defaultNS: 'common',
  interpolation: { escapeValue: false },
  debug: __DEV__,
  saveMissing: __DEV__,
  missingKeyHandler: __DEV__
    ? (_lngs, ns, key) => {
        console.warn(`Missing i18n key: [${ns}] ${key}`);
      }
    : undefined,
});

export default i18n;
