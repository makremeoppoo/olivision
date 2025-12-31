import { cardClasses } from '@mui/material/Card';

// ----------------------------------------------------------------------

export function applySettingsToComponents(settingsState) {
  const MuiCssBaseline = {
    styleOverrides: (theme) => ({
      html: {
        fontSize: settingsState?.fontSize,
      },
      body: {
        [`& .${cardClasses.root}`]: {
          ...(settingsState?.contrast === 'high' && {
            '--card-shadow': theme.vars.customShadows.z1,
          }),
        },
      },
    }),
  };

  return {
    components: {
      MuiCssBaseline,
    },
  };
}
