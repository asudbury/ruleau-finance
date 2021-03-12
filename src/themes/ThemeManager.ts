import { createMuiTheme, responsiveFontSizes, Theme } from "@material-ui/core";
import { themeOptions as commonThemeOptions } from "./CommonThemeOptions";
import { themeOptions as darkThemeOptions } from "./DarkThemeOptions";
import { themeOptions as lightThemeOptions } from "./LightThemeOptions";

// eslint-disable-next-line import/prefer-default-export
export function getAppTheme(): Theme {
  return getDarkTheme();
}

export function getDarkTheme(): Theme {
  let darkTheme = createMuiTheme({
    ...darkThemeOptions,
    ...commonThemeOptions,
  });
  darkTheme = responsiveFontSizes(darkTheme);
  return darkTheme;
}

export function getLightTheme(): Theme {
  let lightTheme = createMuiTheme({
    ...lightThemeOptions,
    ...commonThemeOptions,
  });
  lightTheme = responsiveFontSizes(lightTheme);
  return lightTheme;
}
