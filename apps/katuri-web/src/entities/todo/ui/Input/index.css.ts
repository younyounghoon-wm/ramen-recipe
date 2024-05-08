import { style } from "@vanilla-extract/css";
import palette from "../../../../../styles/palette";

export const inputStyle = style({
  flex: 1,

  fontSize: "16px",

  color: palette.white,
  backgroundColor: "transparent",

  border: `1px solid ${palette.grey}`,
  borderRadius: "20px",

  margin: "0",
  padding: "16px",

  "::placeholder": {
    color: palette.grey,
  },
});
