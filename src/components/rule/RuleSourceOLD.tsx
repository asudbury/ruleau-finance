import React from "react";
import {
  Grid,
  Typography,
  FormControlLabel,
  Switch,
  Divider,
  Box,
} from "@material-ui/core";
import LabelAndValue from "../core/LabelAndValue";

export default function RuleSource() {
  const [showSource, setShowSource] = React.useState(true);

  function handleShowSource() {
    setShowSource(!showSource);
  }

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
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        <FormControlLabel
          control={<Switch checked={showSource} onChange={handleShowSource} />}
          label={<Typography variant="caption">Show Source</Typography>}
        />
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        {showSource && (
          <div>
            <Divider />
            <Box p={3}>
              <Typography variant="body2">
                if customer.calculated_income &gt; 50000 then pass
                <br /> else if sum(customer.capital_gains.yearly.dividends) &gt;
                50000 then pass <br /> else fail
              </Typography>
            </Box>
            <Divider />
          </div>
        )}
      </Grid>
    </Grid>
  );
}
