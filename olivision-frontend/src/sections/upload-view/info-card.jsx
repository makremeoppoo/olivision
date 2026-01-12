/** @format */
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

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
export default InfoCard;
