import React from "react";
import { Grid } from "@material-ui/core";
import LabelAndValue from "../core/LabelAndValue";

export default function RuleSource() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={1} />
      <Grid item xs={11}>
        <LabelAndValue
          label="Override Level"
          value="1. Basic User"
          variant="body2"
        />
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={11}>
        <LabelAndValue
          label="Override Guidance"
          value="Only override if customer is expecting income to increase in the near future"
          variant="body2"
        />
      </Grid>
    </Grid>
  );
}
