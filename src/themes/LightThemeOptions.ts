import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

// eslint-disable-next-line import/prefer-default-export
export const themeOptions: ThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#12c170",
      dark: "#17764a",
      light: "#75ff96",
      contrastText: "#1c1c1c",
    },
    secondary: {
      main: "#006664",
      dark: "#003332",
    },
    text: {
      secondary: "#b7b7b7",
      disabled: "#414348",
      hint: "#b7b7b7",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
    body1: {
      fontWeight: 600,
    },
    body2: {
      fontWeight: 600,
    },
    caption: {
      fontWeight: 600,
    },
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    overline: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 600,
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#161617",
        color: "#ffff",
      },
    },
    MuiButton: {
      root: {
        borderRadius: "2em",
      },
    },
    MuiTabs: {
      indicator: {
        height: "0.3em",
      },
    },
    MuiTab: {
      wrapper: {
        flexDirection: "row",
      },
      root: {
        backgroundColor: "#161617",
        color: "#0000000",
      },
    },
    MuiSvgIcon: {
      root: {
        width: "1.3em",
      },
    },
    MuiCard: {
      root: {
        borderRadius: "0.8em",
        backgroundColor: "#fafafa",
      },
    },
  },
};
