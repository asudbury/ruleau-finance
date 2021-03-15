import React from "react";
import { Box, Grid } from "@material-ui/core";
import StatisticsCard from "./StatisticsCard";
import Chart from "../../components/charts/Chart";
import BarChartStackedBar from "../../components/charts/BarChartStackedBar";

export default function Statistics() {
  return (
    <div>
      <Box p={5}>
        <Grid container>
          <Grid item xs={6} md={6} style={{ width: 300 }}>
            <Chart chart={BarChartStackedBar}></Chart>
          </Grid>
          <Grid item xs={6} md={6} style={{ width: 500 }}>
            <Grid container spacing={2} direction="column" alignItems="center">
              <Grid item xs={6} md={6} style={{ width: 300 }}>
                <StatisticsCard title="Total cases" userDescription="2600" />
              </Grid>
              <Grid item xs={6} md={6} style={{ width: 600 }}>
                <StatisticsCard title="Cases this week" userDescription="100" />
              </Grid>
              <Grid item xs={6} md={6} style={{ width: 600 }}>
                <StatisticsCard
                  title="Require attention"
                  userDescription="11"
                />
              </Grid>
              <Grid item xs={6} md={6} style={{ width: 600 }}>
                <StatisticsCard title="Process versions" userDescription="36" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
