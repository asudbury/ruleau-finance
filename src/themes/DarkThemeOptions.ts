import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

// eslint-disable-next-line import/prefer-default-export
export const themeOptions: ThemeOptions = {
  palette: {
    type: "dark",
    background: {
      default: "#161617",
    },
    primary: {
      main: "#12dcff",
      dark: "#12C370",
      light: "#B9FFC9",
      contrastText: "#1C1C1C",
    },
    secondary: {
      main: "#12dcff",
      dark: "#006664",
      light: "#41E4FF",
    },
    text: {
      secondary: "#B7B7B7",
      disabled: "#414348",
      hint: "#B7B7B7",
    },
  },
};
