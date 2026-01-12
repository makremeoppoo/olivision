'use client';

import { motion } from 'framer-motion';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useTranslate } from 'src/locales';

export function AboutHero({ sx, ...other }) {
  const trans = useTranslate();

  const onBackToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const floatAnimation = {
    y: [-20, 0, -20],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
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
      sx={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        background: 'linear-gradient(135deg, #2d5016, #4a7c2c, #6b9e4d)',
        ...sx,
      }}
      {...other}
    >
      <Container maxWidth="md">
        <motion.div animate={floatAnimation} style={{ display: 'inline-block' }}>
          <Typography fontSize={64}>🫒</Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={textContainer}>
          <motion.div variants={fadeUp}>
            <Typography variant="h2" fontWeight="bold">
              Olivision
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography variant="h3" sx={{ my: 2 }}>
              زيتونك
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography variant="h6">{trans.t('about.text2')}</Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography sx={{ mb: 3 }}>{trans.t('about.text3')}</Typography>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Button
            onClick={onBackToBottom}
            variant="contained"
            sx={{
              borderRadius: 50,
              px: 4,
              py: 1.5,
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': { bgcolor: '#f0f0f0' },
            }}
          >
            {trans.t('about.try')}
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
