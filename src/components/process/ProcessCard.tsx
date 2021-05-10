import React from "react";
import { useHistory } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import {
  Badge,
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  makeStyles,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BallotIcon from "@material-ui/icons/Ballot";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 180,
  },
}));

interface ProcessCardProps {
  processId: number;
  title: string;
  userDescription: string;
  casesToReviewCount: number;
  casesOverriddenCount: number;
}

export default function ProcessCard({
  processId,
  title,
  userDescription,
  casesToReviewCount,
  casesOverriddenCount,
}: ProcessCardProps) {
  const classes = useStyles();

  const history = useHistory();

  function getFormattedTitle(title: string) {
    return title.replace(new RegExp(" ", "g"), "-");
  }

  function onCasesToReview() {
    history.push(
      "/ruleau-finance/process/" +
        getFormattedTitle(title) +
        "/cases/?openclosed=1&result=3"
    );
  }

  function onCasesOverridden() {
    history.push(
      "/ruleau-finance/process/" +
        getFormattedTitle(title) +
        "/cases/?openclosed=2&result=1"
    );
  }

  function onStatistics() {
    history.push(
      "/ruleau-finance/process/" + getFormattedTitle(title) + "/statistics"
    );
  }

  function onOverview() {
    history.push(
      "/ruleau-finance/process/" + getFormattedTitle(title) + "/overview"
    );
  }
  return (
    <Card variant="outlined">
      <CardHeader
        avatar={<BallotIcon color="primary" />}
        title={title}
        titleTypographyProps={{ color: "primary", variant: "h6" }}
        subheader={userDescription}
      />
      <Box p={1}>
        <Divider />
      </Box>
      <CardContent>
        <Grid container spacing={5}>
          <Grid item>
            <FormControl className={classes.formControl}>
              <Badge color="primary" badgeContent={casesToReviewCount}>
                <Button
                  data-testid="toReviewButton"
                  className={classes.formControl}
                  variant="outlined"
                  color="primary"
                  startIcon={<NotificationsIcon color="action" />}
                  onClick={onCasesToReview}
                >
                  Cases to Review
                </Button>
              </Badge>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <Badge color="primary" badgeContent={casesOverriddenCount}>
                <Button
                  data-testid="overriddenButton"
                  className={classes.formControl}
                  variant="outlined"
                  color="primary"
                  startIcon={<AssignmentIcon color="action" />}
                  onClick={onCasesOverridden}
                >
                  Cases Overridden
                </Button>
              </Badge>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <Button
                data-testid="overriddenButton"
                className={classes.formControl}
                variant="outlined"
                startIcon={<AssignmentIcon color="action" />}
                onClick={onStatistics}
              >
                Process Statistics
              </Button>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl className={classes.formControl}>
              <Button
                data-testid="overriddenButton"
                className={classes.formControl}
                variant="outlined"
                startIcon={<AssignmentIcon color="action" />}
                onClick={onOverview}
              >
                Process Overview
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
