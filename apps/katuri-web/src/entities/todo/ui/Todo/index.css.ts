import { style } from "@vanilla-extract/css";
import palette from "../../../../../styles/palette";

export const todoStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const textStyle = style({
  display: "flex",
  alignItems: "center",

  fontSize: "24px",
  fontWeight: "bold",
  color: palette.white,

  gap: "8px",
});

export const createdAtStyle = style({
  fontSize: "14px",
  color: palette.grey,
});

export const completedStyle = style({
  textDecoration: "line-through",
  color: palette.grey,
});
