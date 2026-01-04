/** @format */

import { varAlpha } from 'minimal-shared/utils';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import BgImage from 'src/assets/background.jpg';

import { uploadClasses } from '../classes';

// ----------------------------------------------------------------------

export const UploadWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%', // default for mobile
  [theme.breakpoints.up('md')]: {
    // md = desktop
    height: '100vh',
  },
  padding: '50px 10%', // padding inside wrapper, can adjust as needed
  position: 'relative',
  backgroundColor: theme.vars.palette.background.default,
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', // ensures image covers entire div
  backgroundPosition: 'center', // center image
}));

export const UploadArea = styled('div')(({ theme }) => ({
  minHeight: 450,
  outline: 'none',
  display: 'flex',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create(['opacity']),
  backgroundColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
  border: `3px solid ${theme.palette.primary.main}`,
  '&:hover': {
    opacity: 0.72,
  },
  [`&.${uploadClasses.state.dragActive}`]: {
    opacity: 0.72,
  },
  [`&.${uploadClasses.state.disabled}`]: {
    opacity: 0.48,
    pointerEvents: 'none',
  },
  [`&.${uploadClasses.state.error}`]: {
    color: theme.vars.palette.error.main,
    borderColor: theme.vars.palette.error.main,
    backgroundColor: varAlpha(theme.vars.palette.error.mainChannel, 0.08),
  },
}));

export const PlaceholderContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  [`& .${uploadClasses.placeholder.content}`]: {
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  [`& .${uploadClasses.placeholder.title}`]: {
    ...theme.typography.h6,
  },
  [`& .${uploadClasses.placeholder.description}`]: {
    ...theme.typography.body2,
    color: theme.vars.palette.text.secondary,
    '& span': {
      textDecoration: 'underline',
      color: theme.vars.palette.primary.main,
    },
  },
}));

export const DeleteButton = styled(IconButton)(({ theme }) => ({
  top: 0,
  right: 0,
  zIndex: 9,
  position: 'absolute',
  color: varAlpha(theme.vars.palette.common.whiteChannel, 0.8),
  backgroundColor: varAlpha(theme.vars.palette.grey['900Channel'], 0.72),
  '&:hover': {
    backgroundColor: varAlpha(theme.vars.palette.grey['900Channel'], 0.48),
  },
}));

export const SubmitContainer = styled('div')({
  display: 'flex',
  justifyContent: 'end',
  marginTop: 2,
});
