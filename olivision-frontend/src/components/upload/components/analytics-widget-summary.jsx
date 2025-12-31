/** @format */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Alert from '@mui/material/Alert';
import { useTheme } from '@mui/material/styles';

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

  const renderAcidity = () => (
    <Box
      sx={{
        top: 16,
        gap: 0.5,
        right: 16,
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        color: acidity > 0.6 ? 'red' : 'green',
      }}
    >
      <Iconify width={20} icon={acidity > 0.6 ? 'eva:trending-down-fill' : 'mdi:leaf'} />
      <Box
        component="span"
        style={{ color: acidity > 0.6 ? 'red' : 'green' }}
        sx={{ typography: 'subtitle2', color: `primary.main` }}
      >
        {acidity}
      </Box>
    </Box>
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
      <Box sx={{ width: 48, height: 48, mb: 2 }}>{icon}</Box>

      {renderAcidity()}
      {alertMessage && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {alertMessage}
        </Alert>
      )}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 3,
        }}
      >
        {/* Left Side - English */}
        <Box>
          <Box sx={{ mb: 1 }}>
            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>
              <Box sx={{ typography: 'subtitle1', color: `primary.main` }}>
                <Iconify width={20} icon="mdi:leaf" /> Maturity
              </Box>
            </Box>
            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>{maturity}</Box>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Box sx={{ typography: 'subtitle1', color: `primary.main` }}>
              <Iconify width={20} icon="mdi:leaf" /> Acidity
            </Box>
            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>{acidity}</Box>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Box sx={{ typography: 'subtitle1', color: `primary.main` }}>
              <Iconify width={20} icon="mdi:leaf" /> Note
            </Box>
            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>{note}</Box>
          </Box>
          <Box>
            <Box sx={{ typography: 'subtitle1', color: `primary.main` }}>
              <Iconify width={20} icon="mdi:leaf" /> Recommendation
            </Box>
            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>{recommendation}</Box>
          </Box>
        </Box>

        {/* Right Side - Arabic */}
        <Box sx={{ textAlign: 'right', direction: 'rtl' }}>
          <Box sx={{ mb: 1 }}>
            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>
              <Box sx={{ typography: 'subtitle1', color: `primary.main` }}>
                <Iconify width={20} icon="mdi:leaf" /> النضج
              </Box>
            </Box>

            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>{maturity}</Box>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>
              <Box sx={{ typography: 'subtitle1', color: `primary.main` }}>
                <Iconify width={20} icon="mdi:leaf" /> الحموضة
              </Box>
            </Box>

            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>{acidity}</Box>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>
              <Box sx={{ typography: 'subtitle1', color: `primary.main` }}>
                <Iconify width={20} icon="mdi:leaf" /> ملاحظة
              </Box>
            </Box>

            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>{note}</Box>
          </Box>
          <Box>
            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>
              <Box sx={{ typography: 'subtitle1', color: `primary.main` }}>
                <Iconify width={20} icon="mdi:leaf" /> توصية
              </Box>
            </Box>

            <Box sx={{ typography: 'subtitle2', color: `primary.main` }}>{recommendationAr}</Box>
          </Box>
        </Box>
      </Box>

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
