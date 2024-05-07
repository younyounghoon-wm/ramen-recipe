import { style } from "@vanilla-extract/css";
import palette from "../../styles/palette";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "lightblue",
});
export const todoPageStyle = style({
  width: "100vw",
  maxWidth: "800px",
  padding: "50px 24px",
  background: palette.black,
});
