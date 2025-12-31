/** @format */

import { Fragment } from "react";

import Portal from "@mui/material/Portal";
import { styled } from "@mui/material/styles";

import { AnimateLogoRotate } from "../animate";

// ----------------------------------------------------------------------

export function SplashScreen({
  portal = true,
  slots,
  slotProps,
  sx,
  ...other
}) {
  const PortalWrapper = portal ? Portal : Fragment;

  return (
    <PortalWrapper>
      <LoadingWrapper {...slotProps?.wrapper}>
        <LoadingContent sx={sx} {...other}>
          {slots?.logo ?? <AnimateLogoRotate {...slotProps?.logo} />}
        </LoadingContent>
      </LoadingWrapper>
    </PortalWrapper>
  );
}

// ----------------------------------------------------------------------

const LoadingWrapper = styled("div")({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
});

const LoadingContent = styled("div")(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 9998,
  flexGrow: 1,
  width: "100%",
  height: "100%",
  display: "flex",
  position: "fixed",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: `color-mix(
  in srgb,
  ${theme.vars.palette.background.default} 60%,
  transparent
)`,
}));
