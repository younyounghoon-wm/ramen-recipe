import { style } from "@vanilla-extract/css";
import palette from "../../../../../styles/palette";

export const tabContainer = style({
  display: "flex",
  color: palette.white,
});

export const tabStyle = style({
  flex: 1,

  textAlign: "center",
  fontSize: "18px",
  color: palette.white,

  background: "none",
  border: "none",
  padding: "0.5rem 1rem",
  borderBottom: `2px solid ${palette.black}`,
});

export const active = style({
  transition: "0.25s",
  borderBottom: `2px solid ${palette.green}`,
});
