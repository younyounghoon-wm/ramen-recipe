import { globalStyle } from "@vanilla-extract/css";
import palette from "./palette";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html, body, main", {
  height: "100%",
  backgroundColor: palette.black,
});

globalStyle("input", {
  outline: "none",
  padding: "0",
  margin: "0",
});

globalStyle("button", {
  cursor: "pointer",
});
