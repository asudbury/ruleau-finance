/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import LogoIcon from "../src/components/icons/LogoIcon";
import {
  AppBar,
  Box,
  fade,
  Hidden,
  ThemeProvider,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";

import createPersistedState from "use-persisted-state";

import { getDarkTheme, getLightTheme } from "../src/themes/ThemeManager";

import Settings from "./components/Settings";
import LoggedOutStatus from "./components/login/LoggedOutStatus";

import IsUserLoggedIn from "./utils/IsUserLoggedIn";

import Routes from "./Routes";

import ProcessList from "./components/ProcessList";
import History from "../src/utils/History";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logoButton: {
    marginRight: theme.spacing(1),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const App = () => {
  localStorage.setItem("lastCaseId", "");

  const classes = useStyles();

  const isLoggedIn = IsUserLoggedIn();

  let lightTheme = getLightTheme();
  let darkTheme = getDarkTheme();

  const useShowAppBar = createPersistedState("showAppBar");
  const [showAppBar] = useShowAppBar(true);

  const useAppTheme = createPersistedState("appTheme");
  const [appTheme, setAppTheme] = useAppTheme("dark");

  const theme = appTheme === "dark" ? { ...darkTheme } : { ...lightTheme };

  const [darkState, setDarkState] = useState(true);

  function onDarkModeChange() {
    setDarkState(!darkState);
    setAppTheme(appTheme === "dark" ? "light" : "dark");
  }

  function onLogin() {}

  function handleHomePage() {
    History.push(process.env.PUBLIC_URL);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {showAppBar && (
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="home page"
                onClick={handleHomePage}
              >
                <LogoIcon fontSize="large" className={classes.logoButton} />
              </IconButton>
              <Typography variant="h6" onClick={handleHomePage}>
                Ruleau
              </Typography>
              {isLoggedIn && (
                <Hidden only={["xs"]}>
                  <Box ml={10}>
                    <ProcessList />
                  </Box>
                </Hidden>
              )}
              <div className={classes.grow} />
              <div>
                <Settings
                  themeName={appTheme}
                  onDarkModeChange={onDarkModeChange}
                />
              </div>
              <div>{!isLoggedIn && <LoggedOutStatus onLogin={onLogin} />}</div>
            </Toolbar>
            {isLoggedIn && (
              <Hidden only={["sm", "md", "lg", "xl"]}>
                <Toolbar>
                  <Box>
                    <ProcessList />
                  </Box>
                </Toolbar>
              </Hidden>
            )}
          </AppBar>
        )}
        <Routes />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
