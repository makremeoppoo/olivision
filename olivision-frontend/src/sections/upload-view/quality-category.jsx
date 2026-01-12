/** @format */
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// ----------------------------------------------------------------------
const QualityCategory = ({ range, label, icon }) => (
  <Box
    sx={{
      p: 2,
      borderRadius: 2,
      bgcolor: 'rgba(255,255,255,0.12)',
      mb: 1,
    }}
  >
    <Stack direction="row" justifyContent="space-between">
      <Typography fontWeight={600}>{range}</Typography>
      <Typography>{icon}</Typography>
    </Stack>
    <Typography variant="body2" color="rgba(255,255,255,0.8)">
      {label}
    </Typography>
  </Box>
);
export default QualityCategory;
