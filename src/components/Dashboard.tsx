import { Box, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ProcessCard from "./process/ProcessCard";
import { Process } from "../services/models/Process";
import GetProcessesSelector from "../services/selectors/GetProcessesSelector";

export default function Dashboard() {
  const processes = GetProcessesSelector().payload as Array<Process>;
  return (
    <Box p={5}>
      <Grid container spacing={5} direction="column">
        <Grid item>
          <Box fontWeight="fontWeightBold">
            <Typography variant="h4" gutterBottom>
              Welcome to your Ruleau Dashboard
            </Typography>
          </Box>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>
        <Grid item>
          <Box fontWeight="fontWeightMedium">
            <Typography variant="h5">My Processes</Typography>
          </Box>
        </Grid>
        {processes.map((process, index) => (
          <Grid item xs={12} md={12} key={process.id}>
            <ProcessCard
              processId={process.id}
              title={process.name}
              userDescription={process.desc}
              casesToReviewCount={process.casesToReview}
              casesOverriddenCount={process.casesOverridden}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
