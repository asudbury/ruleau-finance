import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  makeStyles,
  Tabs,
  Tab,
  AppBar,
  Divider,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import SortIcon from "@material-ui/icons/Sort";
import WorkIcon from "@material-ui/icons/Work";
import SubjectIcon from "@material-ui/icons/Subject";
import TimelineIcon from "@material-ui/icons/Timeline";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import Cases from "../components/process/MockCases2";
import Overrides from "../components/process/Overrides";
import Rules from "../components/process/Rules";
import VersionHistory from "../components/process/VersionHistory";
import Statistics from "../components/process/Statistics";
import Overview from "../components/process/Overview";
import AppBreadcrumbs, { Page } from "../components/AppBreadcrumbs";
import useUrlManager from "../hooks/useUrlManager";
import GetProcessSelector from "../services/selectors/GetProcessSelector";
import { logDebug } from "../utils/Logger";

export default function ProcessPage() {
  const history = useHistory();
  const handle = useFullScreenHandle();

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      overflow: "hidden",
    },
    grow: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();
  const [publicUrl, formattedProcessName] = useUrlManager();

  enum TabValue {
    Cases,
    Overrides,
    Rules,
    VersionHistory,
    Statistics,
    Overview,
  }

  let selectedTabValue = TabValue.Cases;

  if (window.location.toString().endsWith("rules")) {
    selectedTabValue = TabValue.Rules;
  }

  if (window.location.toString().endsWith("statistics")) {
    selectedTabValue = TabValue.Statistics;
  }

  if (window.location.toString().endsWith("overview")) {
    selectedTabValue = TabValue.Overview;
  }

  const [value, setValue] = useState<TabValue>(selectedTabValue);

  const urlParams = new URLSearchParams(window.location.search);

  const opencloseParam = urlParams.get("openclosed") || "";
  const resultParam = urlParams.get("result") || "";

  const openClosed: string[] = [opencloseParam];
  const result: string[] = [resultParam];

  const process = GetProcessSelector(formattedProcessName);

  const handleTabChange = (event: React.ChangeEvent<{}>, value: number) => {
    setValue(value);
  };

  function onCaseSelected(caseID: string) {
    logDebug("ProcessPage", "lastCaseId=" + caseID);
    localStorage.setItem("lastCaseId", caseID);
    history.push(
      publicUrl +
        "/process/" +
        encodeURIComponent(formattedProcessName) +
        "/case/" +
        caseID
    );
  }

  function onHistoryItemSelected(version: string) {}

  function handleFullScreen() {
    handle.enter();
  }

  function handleFullScreenExit() {
    handle.exit();
  }
  return (
    <div className={classes.root}>
      <Box p={5}>
        <AppBreadcrumbs page={Page.ProcessPage} />
        <FullScreen handle={handle}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h5" gutterBottom>
                Process: {process.name}
              </Typography>
              <div className={classes.grow} />
              {!handle.active && (
                <IconButton
                  edge="end"
                  aria-label="Full Screen"
                  onClick={handleFullScreen}
                >
                  <FullscreenIcon />
                </IconButton>
              )}
              {handle.active && (
                <IconButton
                  edge="end"
                  aria-label="Full Screen Exit"
                  onClick={handleFullScreenExit}
                >
                  <FullscreenExitIcon />
                </IconButton>
              )}
            </Toolbar>
          </AppBar>
          <Typography variant="body1" gutterBottom>
            {process.description}
          </Typography>
          <AppBar position="static">
            <Tabs
              indicatorColor="primary"
              textColor="primary"
              value={value}
              onChange={handleTabChange}
            >
              <Tab icon={<WorkIcon />} label="Cases" value={TabValue.Cases} />
              <Tab
                icon={<SubjectIcon />}
                label="Overrides"
                value={TabValue.Overrides}
              />
              <Tab icon={<SortIcon />} label="Rules" value={TabValue.Rules} />
              <Tab
                icon={<TimelineIcon />}
                label="History"
                value={TabValue.VersionHistory}
              />
              <Tab
                icon={<EqualizerIcon />}
                label="Statistics"
                value={TabValue.Statistics}
              />
              <Tab
                icon={<ZoomInIcon />}
                label="Overview"
                value={TabValue.Overview}
              />
            </Tabs>
          </AppBar>
          {value === TabValue.Cases && (
            <Cases
              openClosed={openClosed}
              onCaseSelected={onCaseSelected}
              result={result}
            />
          )}
          {value === TabValue.Overrides && (
            <Overrides onCaseSelected={onCaseSelected} />
          )}
          {value === TabValue.Rules && <Rules />}
          {value === TabValue.VersionHistory && (
            <VersionHistory onHistoryItemSelected={onHistoryItemSelected} />
          )}
          {value === TabValue.Statistics && <Statistics />}
          {value === TabValue.Overview && <Overview />}
        </FullScreen>
      </Box>
    </div>
  );
}
