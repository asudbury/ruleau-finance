import React, { useState } from "react";
import {
  makeStyles,
  Badge,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";
import { format } from "date-fns";
import SubjectIcon from "@material-ui/icons/Subject";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.palette.error.main,
  },
  success: {
    color: theme.palette.success.main,
  },
  nowrap: {
    display: "flex",
    whiteSpace: "nowrap",
    overflow: "auto",
  },
}));

export default function CaseRuleOverrideHistory() {
  const classes = useStyles();

  const [hasUpdate, setHasUpdate] = useState(false);

  const [override] = useState({
    id: "1",
    created_at: new Date(),
    applied: true,
    override_reason: "A reason",
  });

  setInterval(() => {
    override.id = localStorage.getItem("overrideId") || "1";

    if (override.id !== "1") {
      override.created_at = new Date();
      override.applied = true;
      override.override_reason = localStorage.getItem("overrideReason") || "";
      setHasUpdate(true);
      clearInterval();
    }
  }, 500);

  return (
    <Grid container spacing={1}>
      <Grid item xs={11}>
        <Typography>Override History</Typography>
        <TableContainer>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <SubjectIcon color="primary" /> 01 Jan 2020 08:12:12
                </TableCell>
                <TableCell>
                  <div className={classes.nowrap}>
                    <CheckCircleOutlineOutlinedIcon
                      fontSize="small"
                      className={classes.success}
                    />
                    Applied
                  </div>
                </TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>lorem ipsum</TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <SubjectIcon color="primary" /> 01 Apr 2020 10:00:00
                </TableCell>
                <TableCell>
                  {" "}
                  <div className={classes.nowrap}>
                    <HighlightOffOutlinedIcon
                      fontSize="small"
                      className={classes.error}
                    />
                    Removed
                  </div>
                </TableCell>
                <TableCell>John Smith</TableCell>
                <TableCell>lorem ipsum</TableCell>
              </TableRow>
              {override && hasUpdate && (
                <TableRow>
                  <TableCell>
                    <Grid
                      container
                      spacing={1}
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start"
                    >
                      <Grid item>
                        <Badge color="secondary" overlap="circle" variant="dot">
                          <SubjectIcon color="primary" />
                        </Badge>
                      </Grid>
                      <Grid item>
                        <div className={classes.nowrap}>
                          {format(
                            new Date(override.created_at),
                            "dd-MMM-yyyy HH:mm:ss"
                          )}
                        </div>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                    <div className={classes.nowrap}>
                      {override.applied === true && (
                        <CheckCircleOutlineOutlinedIcon
                          fontSize="small"
                          className={classes.success}
                        />
                      )}
                      {override.applied === false && (
                        <HighlightOffOutlinedIcon
                          fontSize="small"
                          className={classes.error}
                        />
                      )}
                      {override.applied === true ? "Applied" : "Removed"}
                    </div>
                  </TableCell>
                  <TableCell>Unknown User</TableCell>
                  <TableCell>{override.override_reason}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
