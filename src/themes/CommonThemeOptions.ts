import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

// eslint-disable-next-line import/prefer-default-export
export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: "Montserrat !important",
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 4,
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
        borderRadius: "2em",
      },
    },
  },
};
