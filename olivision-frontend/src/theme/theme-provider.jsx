/** @format */

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as ThemeVarsProvider } from "@mui/material/styles";

import { createTheme } from "./create-theme";
import { Rtl } from "./with-settings/right-to-left";

// ----------------------------------------------------------------------

export function ThemeProvider({ themeOverrides, children, ...other }) {
  const theme = createTheme({
    localeComponents: "",
    themeOverrides,
  });

  return (
    <ThemeVarsProvider disableTransitionOnChange theme={theme} {...other}>
      <CssBaseline />
      <Rtl>{children}</Rtl>
    </ThemeVarsProvider>
  );
}
