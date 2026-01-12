/** @format */
import { useState, useEffect } from 'react';

import { themeConfig, ThemeProvider } from 'src/theme';
import { I18nProvider } from 'src/locales/i18n-provider';

import { Snackbar } from 'src/components/snackbar';
import { SplashScreen } from 'src/components/loading-screen';
import { defaultSettings, SettingsProvider } from 'src/components/settings';
import { LanguagePopover } from 'src/components/custom-popover/language-popover';

import { allLangs } from './locales';

// ----------------------------------------------------------------------

export default function App({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200); // splash duration

    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <SplashScreen />;
  }
  return (
    <I18nProvider>
      <SettingsProvider defaultSettings={defaultSettings}>
        <ThemeProvider
          modeStorageKey={themeConfig.modeStorageKey}
          defaultMode={themeConfig.defaultMode}
        >
          {/** @slot Language popover */}
          <Snackbar />

          <LanguagePopover data={allLangs} />
          {children}
        </ThemeProvider>
      </SettingsProvider>
    </I18nProvider>
  );
}

// ----------------------------------------------------------------------
