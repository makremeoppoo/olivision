// ----------------------------------------------------------------------
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Iconify } from 'src/components/iconify';
// ----------------------------------------------------------------------

export function AboutVideo({ sx, ...other }) {
  const renderImage = () => (
    <div
      style={{
        display: 'inline-block',
        position: 'relative',
        width: '100%',
        height: 0,
        pb: '56.25%',
        minHeight: 600,
      }}
    >
      <iframe
        src="https://www.youtube.com/embed/nftcw5nOgMc"
        title="Vision Video"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: 16,
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );

  return (
    <Box
      component="section"
      sx={[
        {
          pb: 10,
          position: 'relative',
          bgcolor: 'background.neutral',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Box
          sx={{
            mb: 10,
            borderRadius: 2,
            display: 'flex',
            overflow: 'hidden',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {renderImage()}

          <Fab
            sx={{
              position: 'absolute',
              zIndex: 9,
              bgcolor: 'rgba(255,255,255,0.8)',
              '&:hover': { bgcolor: 'rgba(255,255,255,1)' },
            }}
          >
            <Iconify icon="solar:play-broken" width={32} />
          </Fab>
        </Box>
      </Container>
    </Box>
  );
}
