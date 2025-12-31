/** @format */

import { m } from "framer-motion";
import { motion } from "framer-motion";

import { styled } from "@mui/material/styles";

import { Logo } from "../logo";

// ----------------------------------------------------------------------

export function AnimateLogoRotate({ logo, sx, slotProps, ...other }) {
  return (
    <LogoRotateRoot sx={sx} {...other}>
      {logo ?? (
        <Logo
          {...slotProps?.logo}
          sx={[
            { zIndex: 9, width: 180, height: 180 },
            ...(Array.isArray(slotProps?.logo?.sx)
              ? slotProps.logo.sx
              : [slotProps?.logo?.sx]),
          ]}
        />
      )}

      <LogoRotateBackground
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <motion.span
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          borderRadius: "50%",
          opacity: 0.16,
          background: `conic-gradient(
            from 0deg,
            #66eab5ff 0deg 90deg,
            transparent 90deg 360deg
          )`,
          willChange: "transform",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </LogoRotateRoot>
  );
}

const LogoRotateRoot = styled("div")(() => ({
  width: 250,
  height: 250,
  alignItems: "center",
  position: "relative",
  display: "inline-flex",
  justifyContent: "center",
}));

const LogoRotateBackground = styled(m.span)(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  borderRadius: "50%",
}));
