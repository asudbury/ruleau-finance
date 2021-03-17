/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import LogoIcon from "./components/icons/LogoIcon";
import SearchIcon from "@material-ui/icons/Search";
import {
  AppBar,
  fade,
  InputBase,
  ThemeProvider,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
} from "@material-ui/core";

import createPersistedState from "use-persisted-state";

import { getDarkTheme, getLightTheme } from "./themes/ThemeManager";

import Settings from "./components/Settings";
import LoggedOutStatus from "./components/login/LoggedOutStatus";

import IsUserLoggedIn from "./utils/IsUserLoggedIn";

import Routes from "./Routes";

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

  function handleKeyPress(event: { key: string }) {
    if (event.key === "Enter") {
      let location = "/process/1/case/MORR:009341800029707";

      if (window.location.href.indexOf("github.io") > -1) {
        console.log("we are on githubpages!");
        location = "https://asudbury.github.io/ruleau-finance" + location;
      }
      console.log(location);
      window.location.href = location;
    }
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
                onClick={() => window.open("/")}
              >
                <LogoIcon fontSize="large" className={classes.logoButton} />
              </IconButton>
              <Typography variant="h6">Ruleau</Typography>
              <Hidden only={["xs"]}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>

                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,

                      input: classes.inputInput,
                    }}
                    onKeyPress={handleKeyPress}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </Hidden>
              <div className={classes.grow} />
              <div>
                <Settings
                  themeName={appTheme}
                  onDarkModeChange={onDarkModeChange}
                />
              </div>
              <div>{!isLoggedIn && <LoggedOutStatus onLogin={onLogin} />}</div>
            </Toolbar>
            <Hidden only={["sm", "md", "lg", "xl"]}>
              <Toolbar>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>

                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,

                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </Toolbar>
            </Hidden>
          </AppBar>
        )}
        <Routes />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
