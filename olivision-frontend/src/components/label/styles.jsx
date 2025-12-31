/** @format */

import { varAlpha } from "minimal-shared/utils";

import { styled } from "@mui/material/styles";

// ----------------------------------------------------------------------

const baseColors = ["default"];
const allColors = [...baseColors];

export const LabelRoot = styled("span", {
  shouldForwardProp: (prop) =>
    !["color", "variant", "disabled", "sx"].includes(prop),
})(({ theme }) => ({
  height: 24,
  minWidth: 24,
  flexShrink: 0,
  lineHeight: 18 / 12,
  cursor: "default",
  alignItems: "center",
  whiteSpace: "nowrap",
  display: "inline-flex",
  gap: theme.spacing(0.75),
  justifyContent: "center",
  padding: theme.spacing(0, 0.75),
  fontSize: theme.typography.pxToRem(12),
  fontWeight: theme.typography.fontWeightBold,
  borderRadius: Number(theme.shape.borderRadius) * 0.75,
  variants: [
    /**
     * @variant filled
     */
    {
      props: { variant: "filled", color: "default" },
      style: {
        ...theme.mixins.filledStyles(theme, "inherit"),
      },
    },

    /**
     * @variant outlined
     */
    {
      props: { variant: "outlined" },
      style: {
        border: "2px solid currentColor",
      },
    },

    /**
     * @variant soft
     */
    ...allColors.map((colorKey) => ({
      props: { variant: "soft", color: colorKey },
      style: () => {
        const currentColor = colorKey === "default" ? "inherit" : colorKey;

        return {
          ...theme.mixins.softStyles(theme, currentColor),
        };
      },
    })),
    /**
     * @variant inverted
     */
    {
      props: { variant: "inverted", color: "default" },
      style: {
        color: theme.vars.palette.grey[800],
        backgroundColor: theme.vars.palette.grey[300],
      },
    },

    /**
     * @disabled
     */
    {
      props: { disabled: true },
      style: {
        opacity: 0.48,
        pointerEvents: "none",
      },
    },
  ],
}));

export const LabelIcon = styled("span")({
  width: 16,
  height: 16,
  flexShrink: 0,
  "& svg, & img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
