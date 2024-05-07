import { style } from "@vanilla-extract/css";
import palette from "../../../../../styles/palette";

export const headerStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "16px",
});

export const dateStyle = style({
  fontSize: "24px",
  fontWeight: "bold",
  color: palette.white,
});

export const description = style({
  fontSize: "20x",
  color: palette.grey,
});
