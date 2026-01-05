/** @format */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { useTranslate } from 'src/locales';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------
const InfoCard = ({ title, icon, bg, sx = {}, children }) => (
  <Card sx={{ borderRadius: 3, color: 'white', background: bg, ...sx }}>
    <CardContent>
      <Stack direction="row" spacing={1} alignItems="center" mb={2}>
        <Iconify icon={icon} width={22} />
        <Typography variant="h6">{title}</Typography>
      </Stack>
      {children}
    </CardContent>
  </Card>
);

export function ReportBox({
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
  const trans = useTranslate();

  const qualityCategories = [
    { range: '0.1% - 0.3%', label: trans.t('acidityQuality.premium'), icon: '⭐⭐⭐' },
    { range: '0.31% - 0.5%', label: trans.t('acidityQuality.highQuality'), icon: '⭐⭐' },
    { range: '0.51% - 0.8%', label: trans.t('acidityQuality.standard'), icon: '⭐' },
    { range: '> 0.8%', label: trans.t('acidityQuality.virgin'), icon: '○' },
  ];

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
            <Box sx={{ typography: 'subtitle2', color: (color = 'rgba(255,255,255,0.8)') }}>
              <Box sx={{ typography: 'subtitle1', color: (color = 'rgba(255,255,255,0.8)') }}>
                <Iconify width={20} icon="mdi:leaf" /> {trans.t('maturity')}
              </Box>
            </Box>
            <Box sx={{ typography: 'subtitle2', color: (color = 'rgba(255,255,255,0.8)') }}>
              {maturity || '-'}
            </Box>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Box sx={{ typography: 'subtitle1', color: (color = 'rgba(255,255,255,0.8)') }}>
              <Iconify width={20} icon="mdi:leaf" /> {trans.t('acidity')}
            </Box>
            <Box sx={{ typography: 'subtitle2', color: (color = 'rgba(255,255,255,0.8)') }}>
              {acidity || '-'}
            </Box>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Box sx={{ typography: 'subtitle1', color: (color = 'rgba(255,255,255,0.8)') }}>
              <Iconify width={20} icon="mdi:leaf" /> {trans.t('note')}
            </Box>
            <Box sx={{ typography: 'subtitle2', color: (color = 'rgba(255,255,255,0.8)') }}>
              {note || '-'}
            </Box>
          </Box>
          <Box>
            <Box sx={{ typography: 'subtitle1', color: (color = 'rgba(255,255,255,0.8)') }}>
              <Iconify width={20} icon="mdi:leaf" /> {trans.t('recommendation')}
            </Box>
            <Box sx={{ typography: 'subtitle2', color: (color = 'rgba(255,255,255,0.8)') }}>
              {recommendation || '-'}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }} // column on mobile, row on desktop
      spacing={2} // space between items
      flexWrap="wrap"
    >
      {/* Left Column */}
      <Stack spacing={2} flex={1} minWidth={{ xs: '100%', md: 300 }}>
        <InfoCard
          title={trans.t('acidityQuality.title')}
          icon="mdi:water-percent"
          bg="linear-gradient(135deg, #2e7d32, #1b5e20)"
          sx={{ width: '100%' }}
        >
          {qualityCategories.map((q, i) => (
            <Box
              key={i}
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'rgba(255,255,255,0.12)',
                mb: 1,
              }}
            >
              <Stack direction="row" justifyContent="space-between">
                <Typography fontWeight={600}>{q.range}</Typography>
                <Typography>{q.icon}</Typography>
              </Stack>
              <Typography variant="body2" color="rgba(255,255,255,0.8)">
                {q.label}
              </Typography>
            </Box>
          ))}
          <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.2)' }} />
          <Stack direction="row" spacing={1}>
            <Iconify icon="mdi:information-outline" width={18} />
            <Typography variant="body2">{trans.t('acidityQuality.betterFlavor')}</Typography>
          </Stack>
        </InfoCard>

        <InfoCard
          title={trans.t('maturityYield.title')}
          icon="mdi:trending-up"
          bg="linear-gradient(135deg, #00695c, #004d40)"
          sx={{ width: '100%' }}
        >
          <Typography variant="body2" mb={2}>
            {trans.t('maturityYield.range')}: 2.5 – 4.5
          </Typography>
          <Box
            height={12}
            borderRadius={6}
            sx={{
              background: 'linear-gradient(to right, #66bb6a, #ffee58, #424242)',
              mb: 2,
            }}
          />
          <Stack direction="row" spacing={1}>
            <Iconify icon="mdi:information-outline" width={18} />
            <Typography variant="body2">{trans.t('maturityYield.maturityIndex')}</Typography>
          </Stack>
        </InfoCard>
      </Stack>

      {/* Right Column */}
      <Stack flex={1} minWidth={{ xs: '100%', md: 400 }}>
        <InfoCard
          title={trans.t('report')}
          icon="mdi:flask-outline"
          sx={{
            borderRadius: 3,
            background: 'linear-gradient(135deg, #66bb6a, #004d40)',
            boxShadow: 3,
            width: '100%',
          }}
        >
          {RESULT}
        </InfoCard>
      </Stack>
    </Stack>
  );
}
