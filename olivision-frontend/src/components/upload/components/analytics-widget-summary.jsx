/** @format */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';

import { useTranslate } from 'src/locales';
import square from 'src/assets/shape-square.svg';

import { Iconify } from 'src/components/iconify';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function AnalyticsWidgetSummary({
  sx,
  icon,
  title,
  maturity,
  acidity,
  note,
  recommendation,
  recommendationAr,
  alertMessage,
  color = 'primary',
  ...other
}) {
  const theme = useTheme();
  const trans = useTranslate();

  const RESULT = (
    <>
      {alertMessage && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {alertMessage}
        </Alert>
      )}
      <Box>
        <Box>
          <Box sx={{ mb: 1 }}>
            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>
              <Box sx={{ typography: 'subtitle1', color: `primary.main` }}>
                <Iconify width={20} icon="mdi:leaf" /> {trans.t('maturity')}
              </Box>
            </Box>
            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>{maturity}</Box>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Box sx={{ typography: 'subtitle1', color: `primary.main` }}>
              <Iconify width={20} icon="mdi:leaf" /> {trans.t('acidity')}
            </Box>
            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>{acidity}</Box>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Box sx={{ typography: 'subtitle1', color: `primary.main` }}>
              <Iconify width={20} icon="mdi:leaf" /> {trans.t('note')}
            </Box>
            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>{note}</Box>
          </Box>
          <Box>
            <Box sx={{ typography: 'subtitle1', color: `primary.main` }}>
              <Iconify width={20} icon="mdi:leaf" /> {trans.t('recommendation')}
            </Box>
            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>{recommendation}</Box>
          </Box>
        </Box>
      </Box>
    </>
  );

  return (
    <Card
      sx={[
        () => ({
          p: 3,
          boxShadow: 'none',
          position: 'relative',
          color: `${color}.darker`,
          backgroundImage: `linear-gradient(135deg, ${theme.vars.palette.grey[400]}, ${theme.vars.palette.grey[200]})`,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {maturity && RESULT}
      {!maturity && <Box>{icon}</Box>}
      <SvgColor
        src={square}
        sx={{
          top: 0,
          left: '30%',
          width: '100%',
          zIndex: -1,
          height: 800,
          opacity: 0.24,
          position: 'absolute',
          color: `primary.main`,
        }}
      />
    </Card>
  );
}
