import React from "react";
import {
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";
import SubjectIcon from "@material-ui/icons/Subject";

export default function CaseRuleOverrideHistory() {
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
                <TableCell>Morgan Atkins</TableCell>
                <TableCell>lorem ipsum</TableCell>
                <TableCell>Applied</TableCell>
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
                <TableCell>Lucy Cox</TableCell>
                <TableCell>lorem ipsum</TableCell>
                <TableCell>Removed</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
