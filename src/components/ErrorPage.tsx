import React from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import RuleauButton from "./core/RuleauButton";

export default function ErrorPage() {
  const history = useHistory();

  function handleGoHome() {
    history.push("/");
  }

  return (
    <div>
      <Box p={5}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justify="center"
          direction="column"
        >
          <Grid item xs={12}>
            <Typography variant="h3" color="primary" gutterBottom>
              Sorry
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" gutterBottom>
              It seems like we have an error in the system
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <RuleauButton
              datatestid="goHomeButton"
              arialabel="Go Home button"
              onClick={handleGoHome}
              content="Go Home"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
