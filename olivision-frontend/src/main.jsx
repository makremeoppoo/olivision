/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { themeConfig, ThemeProvider } from "src/theme";

import Uplload from "./pages/upload";
// ----------------------------------------------------------------------

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ThemeProvider
      modeStorageKey={themeConfig.modeStorageKey}
      defaultMode={themeConfig.defaultMode}>
      <Uplload />
    </ThemeProvider>
  </StrictMode>
);
