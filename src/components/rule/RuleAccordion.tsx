import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import DoneIcon from "@material-ui/icons/Done";

interface RuleSummaryProps {
  isRuleDefinition: boolean;
  hasWarning: boolean;
  ruleName: string;
  ruleDescription: string;
  ruleSubDescription: string;
}

export default function RuleAccordion({
  isRuleDefinition,
  hasWarning,
  ruleName,
  ruleDescription,
  ruleSubDescription,
}: RuleSummaryProps) {
  const useStyles = makeStyles((theme) => ({
    warning: {
      color: theme.palette.warning.main,
    },
  }));

  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {!isRuleDefinition && (
        <Grid item>
          {hasWarning && <WarningIcon className={classes.warning} />}
          {!hasWarning && <DoneIcon />}
        </Grid>
      )}
      <Grid item style={{ minWidth: 120 }}>
        <Typography>{ruleName}</Typography>
      </Grid>
      <Grid item style={{ minWidth: 385 }}>
        <Typography>{ruleDescription}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">{ruleSubDescription}</Typography>
      </Grid>
    </Grid>
  );
}
