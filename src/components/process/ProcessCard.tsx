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
import fetchCases from "../../services/slices/Cases";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  function onCasesToReview() {
    history.push("/process/" + processId + "/cases/?openclosed=1&result=3");
  }

  function onCasesOverridden() {
    history.push("/process/" + processId + "/cases/?openclosed=2&result=1");
  }

  dispatch(fetchCases);

  return (
    <Card>
      <CardHeader
        title={title}
        titleTypographyProps={{ color: "primary" }}
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
        </Grid>
      </CardContent>
    </Card>
  );
}
