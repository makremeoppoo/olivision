/** @format */
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { useTranslate } from 'src/locales';

import { InfoRow, InfoCard, InfoSection, QualityCategory } from '.';
// ----------------------------------------------------------------------

export function ReportBox({ maturity, acidity, note, recommendation, alertMessage }) {
  const trans = useTranslate();

  const qualityCategories = [
    { range: '0.1% - 0.3%', label: trans.t('acidityQuality.premium'), icon: '⭐⭐⭐' },
    { range: '0.31% - 0.5%', label: trans.t('acidityQuality.highQuality'), icon: '⭐⭐' },
    { range: '0.51% - 0.8%', label: trans.t('acidityQuality.standard'), icon: '⭐' },
    { range: '> 0.8%', label: trans.t('acidityQuality.virgin'), icon: '○' },
  ];

  const reportData = [
    { icon: 'mdi:leaf', label: trans.t('maturity'), value: maturity },
    { icon: 'mdi:leaf', label: trans.t('acidity'), value: acidity },
    { icon: 'mdi:leaf', label: trans.t('note'), value: note },
    { icon: 'mdi:leaf', label: trans.t('recommendation'), value: recommendation },
  ];

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} flexWrap="wrap">
      {/* Left Column - Quality Information */}
      <Stack spacing={2} flex={1} minWidth={{ xs: '100%', md: 300 }}>
        {/* Acidity Quality Card */}
        <InfoCard
          title={trans.t('acidityQuality.title')}
          icon="mdi:water-percent"
          bg="linear-gradient(135deg, #2e7d32, #1b5e20)"
          sx={{ width: '100%' }}
        >
          {qualityCategories.map((category, index) => (
            <QualityCategory key={index} {...category} />
          ))}
          <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.2)' }} />
          <InfoSection
            icon="mdi:information-outline"
            text={trans.t('acidityQuality.betterFlavor')}
          />
        </InfoCard>

        {/* Maturity Yield Card */}
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
          <InfoSection
            icon="mdi:information-outline"
            text={trans.t('maturityYield.maturityIndex')}
          />
        </InfoCard>
      </Stack>

      {/* Right Column - Report Results */}
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
          {alertMessage && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {alertMessage}
            </Alert>
          )}
          <Box>
            {reportData.map((item, index) => (
              <InfoRow key={index} {...item} />
            ))}
          </Box>
        </InfoCard>
      </Stack>
    </Stack>
  );
}
