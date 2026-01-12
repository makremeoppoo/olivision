/** @format */
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------
const InfoRow = ({ icon, label, value }) => (
  <Box sx={{ mb: 1 }}>
    <Stack direction="row" spacing={1} alignItems="center" mb={0.5}>
      <Iconify width={20} icon={icon} />
      <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
        {label}
      </Typography>
    </Stack>
    <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.8)', pl: 3.5 }}>
      {value || '-'}
    </Typography>
  </Box>
);
export default InfoRow;
