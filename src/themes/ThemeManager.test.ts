import { getAppTheme, getLightTheme, getDarkTheme } from "./ThemeManager";

test("getAppTheme", () => {
  const theme = getAppTheme();
  expect(theme.palette.type).toEqual("dark");
});

test("getAppTheme Dark", () => {
  const theme = getDarkTheme();
  expect(theme.palette.type).toEqual("dark");
});

test("getAppTheme Light", () => {
  const theme = getLightTheme();
  expect(theme.palette.type).toEqual("light");
});
