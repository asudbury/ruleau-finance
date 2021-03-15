import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Box, makeStyles, Tabs, Tab, AppBar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import WorkIcon from "@material-ui/icons/Work";
import TimelineIcon from "@material-ui/icons/Timeline";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import Cases from "../components/process/MockCases2";
import Rules from "../components/process/Rules";
import VersionHistory from "../components/process/VersionHistory";
import Statistics from "../components/process/Statistics";
import Overview from "../components/process/Overview";

export default function ProcessPage() {
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      overflow: "hidden",
      width: 1000,
    },
  }));

  const classes = useStyles();

  enum TabValue {
    Cases,
    Rules,
    History,
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

  const [value, setValue] = useState(selectedTabValue);

  const urlParams = new URLSearchParams(window.location.search);

  const opencloseParam = urlParams.get("openclosed") || "";
  const resultParam = urlParams.get("result") || "";

  const openClosed: string[] = [opencloseParam];
  const result: string[] = [resultParam];

  const handleTabChange = (event: React.ChangeEvent<{}>, value: number) => {
    setValue(value);
  };

  function onCaseSelected(caseID: string) {
    history.push(
      // eslint-disable-next-line no-useless-concat
      "/process/" + "unknown" + "/case/" + caseID
    );
  }

  function onHistoryItemSelected(version: string) {}

  const processTitle = sessionStorage.getItem("processTitle");
  const processDesc = sessionStorage.getItem("processUserDescription");

  return (
    <div className={classes.root}>
      <Box p={5}>
        <Typography variant="h5" gutterBottom>
          Process: {processTitle}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {processDesc}
        </Typography>
        <AppBar position="static">
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            value={value}
            onChange={handleTabChange}
          >
            <Tab icon={<WorkIcon />} label="Cases" value={TabValue.Cases} />
            <Tab icon={<SortIcon />} label="Rules" value={TabValue.Rules} />
            <Tab
              icon={<TimelineIcon />}
              label="History"
              value={TabValue.History}
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
        {value === 0 && (
          <Cases
            openClosed={openClosed}
            result={result}
            onCaseSelected={onCaseSelected}
          />
        )}
        {value === 1 && <Rules />}
        {value === 2 && (
          <VersionHistory onHistoryItemSelected={onHistoryItemSelected} />
        )}
        {value === 3 && <Statistics />}
        {value === 4 && <Overview />}
      </Box>
    </div>
  );
}
