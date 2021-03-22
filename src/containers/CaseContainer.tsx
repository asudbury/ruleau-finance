import React, { useState } from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import CaseWarnings from "../components/case/CaseWarnings";
import CaseRules from "../components/case/CaseRules";
import CaseDetails from "../components/case/CaseDetails";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

export default function CaseContainer(): JSX.Element {
  const classes = useStyles();

  const [isClosed, setIsClosed] = useState(false);

  function handleCloseCase() {
    setIsClosed(true);
  }

  function handleReopenCase() {
    setIsClosed(false);
  }

  return (
    <div className={classes.root}>
      <Box p={5}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CaseDetails
              isClosed={isClosed}
              onCloseCase={handleCloseCase}
              onReopenCase={handleReopenCase}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CaseWarnings />
          </Grid>
          <Grid item xs={12}>
            <CaseRules />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
