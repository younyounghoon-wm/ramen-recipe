import { style } from "@vanilla-extract/css";
import palette from "../../../../../styles/palette";

export const todoStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const textStyle = style({
  fontSize: "20px",
  fontWeight: "bold",
  color: palette.white,
});

export const completedStyle = style({
  textDecoration: "line-through",
  color: palette.grey,
});
