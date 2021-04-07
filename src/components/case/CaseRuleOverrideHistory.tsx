import React from "react";
import {
  makeStyles,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";
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
                  <SubjectIcon color="primary" /> 01 Jan 2020
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
                <TableCell>Morgan Atkins</TableCell>
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
                  <SubjectIcon color="primary" /> 01 Apr 2020
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
                <TableCell>Lucy Cox</TableCell>
                <TableCell>lorem ipsum</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
