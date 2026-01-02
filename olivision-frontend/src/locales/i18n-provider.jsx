/** @format */

import i18next from 'i18next';
import { getStorage } from 'minimal-shared/utils';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, I18nextProvider as Provider } from 'react-i18next';

import { i18nOptions, fallbackLng, storageConfig, i18nResourceLoader } from './locales-config';

// ----------------------------------------------------------------------

const i18nextLng = getStorage(
  storageConfig.localStorage.key,
  storageConfig.localStorage.autoDetection ? undefined : fallbackLng
);

/**
 * Initialize i18next
 */
const initOptions = {
  ...i18nOptions(i18nextLng),
  detection: { caches: ['localStorage'] },
};

i18next.use(LanguageDetector).use(initReactI18next).use(i18nResourceLoader).init(initOptions);

// ----------------------------------------------------------------------

export function I18nProvider({ children }) {
  return <Provider i18n={i18next}>{children}</Provider>;
}
