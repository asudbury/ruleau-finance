import React from "react";
import { Box, Grid } from "@material-ui/core";
import StatisticsCard from "./StatisticsCard";

export default function Statistics() {
  return (
    <div>
      <Box p={5}>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={6} md={6} style={{ width: 600 }}>
            <StatisticsCard
              title="Cases processed in total"
              userDescription="2600"
            />
          </Grid>
          <Grid item xs={6} md={6} style={{ width: 600 }}>
            <StatisticsCard
              title="Cases in the last week"
              userDescription="100"
            />
          </Grid>
          <Grid item xs={6} md={6} style={{ width: 600 }}>
            <StatisticsCard title="Require attention" userDescription="11" />
          </Grid>
          <Grid item xs={6} md={6} style={{ width: 600 }}>
            <StatisticsCard
              title="Process versions recorded"
              userDescription="36"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
