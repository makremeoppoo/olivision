import resourcesToBackend from 'i18next-resources-to-backend';

// MUI Core Locales
import {
  arSA as arSACore,
} from '@mui/material/locale';
// MUI Date Pickers Locales
import {
  enUS as enUSDate,
} from '@mui/x-date-pickers/locales';
// MUI Data Grid Locales
import {
  enUS as enUSDataGrid,
  arSD as arSDDataGrid,
} from '@mui/x-data-grid/locales';

// ----------------------------------------------------------------------

// Supported languages
export const supportedLngs = ['en', 'fr', 'vi', 'cn', 'ar'];

// Fallback and default namespace
export const fallbackLng = 'en';
export const defaultNS = 'common';

// Storage config
export const storageConfig = {
  cookie: { key: 'i18next', autoDetection: false },
  localStorage: { key: 'i18nextLng', autoDetection: false },
};

// ----------------------------------------------------------------------

/**
 * @countryCode https://flagcdn.com/en/codes.json
 * @adapterLocale https://github.com/iamkun/dayjs/tree/master/src/locale
 * @numberFormat https://simplelocalize.io/data/locales/
 */

export const allLangs = [
  {
    value: 'en',
    label: 'English',
    countryCode: 'GB',
    adapterLocale: 'en',
    numberFormat: { code: 'en-US', currency: 'USD' },
    systemValue: {
      components: { ...enUSDate.components, ...enUSDataGrid.components },
    },
  },
  {
    value: 'ar',
    label: 'Arabic',
    countryCode: 'SA',
    adapterLocale: 'ar-sa',
    numberFormat: { code: 'ar-SA', currency: 'SAR' },
    systemValue: {
      components: { ...arSACore.components, ...arSDDataGrid.components },
    },
  },
];

// ----------------------------------------------------------------------

export const i18nResourceLoader = resourcesToBackend(
  (lang, namespace) => import(`./langs/${lang}/messages.json`)
);

export function i18nOptions(lang = fallbackLng, namespace = defaultNS) {
  return {
    // debug: true,
    supportedLngs,
    fallbackLng,
    lng: lang,
    /********/
    fallbackNS: defaultNS,
    defaultNS,
    ns: namespace,
  };
}

export function getCurrentLang(lang) {
  const fallbackLang = allLangs.find((l) => l.value === fallbackLng) ?? allLangs[0];

  if (!lang) {
    return fallbackLang;
  }

  return allLangs.find((l) => l.value === lang) ?? fallbackLang;
}
