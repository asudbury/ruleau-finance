import React, { useState } from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import CaseWarnings from "../components/case/CaseWarnings";
import CaseRules from "../components/case/CaseRules";
import CaseDetails from "../components/case/CaseDetails";
import SetSelectedRuleWarning from "../services/selectors/SetSelectedRuleWarning";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
}));

interface CaseContainerProps {
  onShowRuleDocumentation: () => void;
}

export default function CaseContainer({
  onShowRuleDocumentation,
}: CaseContainerProps): JSX.Element {
  const classes = useStyles();

  const [isClosed, setIsClosed] = useState(false);

  function handleCloseCase() {
    /// setIsClosed(true);
  }

  function handleReopenCase() {
    /// setIsClosed(false);
  }

  function handleRuleWarningSelected(rule: string) {
    SetSelectedRuleWarning(rule);
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
              onShowRuleDocumentation={onShowRuleDocumentation}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CaseWarnings onWarningSelected={handleRuleWarningSelected} />
          </Grid>
          <Grid item xs={12}>
            <CaseRules />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
