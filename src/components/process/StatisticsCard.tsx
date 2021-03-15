import React from "react";
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

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 180,
  },
}));

interface StatisticsCardProps {
  title: string;
  userDescription: string;
}

export default function StatisticsCard({
  title,
  userDescription,
}: StatisticsCardProps) {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={5}>
          <Grid item>
            {userDescription} {title}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
