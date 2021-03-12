import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";

interface CaseWarningProps {
  ruleName: string;
  ruleDescription: string;
  onRuleWarningSelected: (ruleName: string) => void;
}

export default function CaseWarning({
  ruleName,
  ruleDescription,
  onRuleWarningSelected,
}: CaseWarningProps) {
  const useStyles = makeStyles((theme) => ({
    box: {
      borderColor: theme.palette.warning.main,
    },
    warning: {
      color: theme.palette.warning.main,
      textDecoration: "underline",
    },
  }));

  function handleRuleWarningSelected() {
    onRuleWarningSelected(ruleName);
  }

  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container spacing={4}>
        <Grid item>
          <WarningIcon className={classes.warning} />
        </Grid>
        <Grid item>
          <Link
            href="#"
            className={classes.warning}
            onClick={handleRuleWarningSelected}
          >
            <Typography className={classes.warning}>{ruleName}</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="#"
            className={classes.warning}
            onClick={handleRuleWarningSelected}
          >
            <Typography className={classes.warning}>
              {ruleDescription}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
