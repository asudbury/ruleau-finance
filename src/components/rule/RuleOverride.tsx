import React from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TextField,
} from "@material-ui/core";
import SubjectIcon from "@material-ui/icons/Subject";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

interface RuleOverrideProps {
  hasOverride: boolean;
  canBeOverridden: boolean;
  onSaveOverride: () => void;
  onRemoveOverride: () => void;
  overrideMessage: string;
}

export default function RuleOverride({
  hasOverride,
  canBeOverridden,
  onSaveOverride,
  onRemoveOverride,
  overrideMessage,
}: RuleOverrideProps) {

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
                <TableCell>Bob Flem</TableCell>
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
                <TableCell>John Smith</TableCell>
                <TableCell>lorem ipsum</TableCell>
                <TableCell>Removed</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={11}>
        <Typography gutterBottom>&nbsp;</Typography>
        <Typography gutterBottom>Override</Typography>
        {!canBeOverridden && (
          <Box color="info.main">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <InfoOutlinedIcon color="primary" />
              <Typography gutterBottom variant="caption">
                This Rule cannot be overridden
              </Typography>
            </div>
          </Box>
        )}
      </Grid>
      <Grid item xs={12}>
        {!hasOverride && canBeOverridden && (
          <Typography gutterBottom variant="caption">
            {overrideMessage}
          </Typography>
        )}
      </Grid>
      <Grid item xs={12}>
        {!hasOverride && canBeOverridden && (
          <FormControl style={{ width: `50%` }}>
            <TextField
              label="Override Reason"
              multiline
              rows={6}
              variant="filled"
            />
          </FormControl>
        )}
        {hasOverride && canBeOverridden && (
          <FormControl style={{ width: `50%` }}>
            <TextField
              label="Removal Reason"
              multiline
              rows={6}
              variant="filled"
            />
          </FormControl>
        )}
      </Grid>
      <Grid item xs={11}>
        {!hasOverride && canBeOverridden && (
          <div>
            <Button
              data-testid="closeCase"
              type="submit"
              variant="outlined"
              color="primary"
              onClick={onSaveOverride}
            >
              Save Override
            </Button>
          </div>
        )}
        {hasOverride && canBeOverridden && (
          <Button
            data-testid="reopenCase"
            type="submit"
            variant="outlined"
            color="primary"
            onClick={onRemoveOverride}
          >
            Remove Override
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
