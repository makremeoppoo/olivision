/** @format */
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
// ----------------------------------------------------------------------
const InfoSection = ({ icon, text }) => (
  <Stack direction="row" spacing={1} alignItems="flex-start">
    <Iconify icon={icon} width={18} sx={{ mt: 0.25 }} />
    <Typography variant="body2">{text}</Typography>
  </Stack>
);
export default InfoSection;
