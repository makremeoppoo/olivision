/** @format */

import { useId } from "react";
import { mergeClasses } from "minimal-shared/utils";

import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

import OliveSvg from "src/assets/logo.svg";

import { logoClasses } from "./classes";

// ----------------------------------------------------------------------

export function Logo({
  sx,
  disabled,
  className,
  href = "/",
  isSingle = true,
  ...other
}) {
  return (
    <LogoRoot
      href={href}
      aria-label='Logo'
      underline='none'
      className={mergeClasses([logoClasses.root, className])}
      sx={[
        {
          width: 200,
          height: 200,
          ...(disabled && { pointerEvents: "none" }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}>
      <img src={OliveSvg} alt='olive' />
    </LogoRoot>
  );
}

// ----------------------------------------------------------------------

const LogoRoot = styled(Link)(() => ({
  flexShrink: 0,
  color: "transparent",
  display: "inline-flex",
  verticalAlign: "middle",
}));
