import { createMuiTheme, responsiveFontSizes, Theme } from "@material-ui/core";
import { themeOptions as darkThemeOptions } from "./DarkThemeOptions";
import { themeOptions as lightThemeOptions } from "./LightThemeOptions";

export function getTheme(appTheme: string): Theme {
  const theme = appTheme === "dark" ? getDarkTheme() : getLightTheme();
  return theme;
}

export function getDarkTheme(): Theme {
  let darkTheme = createMuiTheme(darkThemeOptions);
  darkTheme = responsiveFontSizes(darkTheme);
  return darkTheme;
}

export function getLightTheme(): Theme {
  let lightTheme = createMuiTheme(lightThemeOptions);
  lightTheme = responsiveFontSizes(lightTheme);
  return lightTheme;
}
