'use client';

import { motion } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------

export function AboutWhat({ sx, ...other }) {
  const trans = useTranslate();

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const textContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Box
      component="section"
      sx={[{ overflow: 'hidden' }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container sx={{ py: { xs: 10, md: 15 }, textAlign: { xs: 'center', md: 'unset' } }}>
        <Grid container columnSpacing={{ md: 3 }} sx={{ alignItems: 'flex-start' }}>
          <Grid item xs={12}>
            {/* Parent container that handles the staggering logic */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textContainer}
            >
              <motion.div variants={fadeRight}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  {trans.t('about.text1')}
                </Typography>
              </motion.div>

              <motion.div variants={fadeRight}>
                <Typography
                  sx={[
                    (theme) => ({
                      color: 'text.secondary',
                      ...theme.applyStyles('dark', {
                        color: 'common.white',
                      }),
                    }),
                  ]}
                >
                  {trans.t('about.text4')}
                </Typography>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

const SKILLS = Array.from({ length: 3 }, (_, index) => ({
  value: [20, 40, 60][index],
  label: ['Development', 'Design', 'Marketing'][index],
}));
