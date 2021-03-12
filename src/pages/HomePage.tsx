import React from "react";
import Dashboard from "../components/Dashboard";
import { makeStyles } from "@material-ui/core";

export default function HomePage() {
  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Dashboard />
    </div>
  );
}
