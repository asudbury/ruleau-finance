import React from "react";
import {
  Box,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
  Switch,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LabelAndValue from "../core/LabelAndValue";

interface RuleDocumentationProps {
  showSwitch: boolean;
}

export default function RuleDocumentation({
  showSwitch,
}: RuleDocumentationProps) {
  const [showDocumentation, setShowDocumentation] = React.useState(true);

  function handleShowDocumentation() {
    setShowDocumentation(!showDocumentation);
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={1} />
        <Grid item xs={11}>
          {showSwitch && (
            <FormControlLabel
              control={
                <Switch
                  checked={showDocumentation}
                  onChange={handleShowDocumentation}
                  color="primary"
                />
              }
              label={
                <Typography variant="caption">Show Documentation</Typography>
              }
            />
          )}
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={11}>
          {showDocumentation && (
            <div>
              <LabelAndValue
                variant="body2"
                label="Rule Identifier"
                value="Function name is used as title"
              />
              <Typography variant="body2">
                Description taken from docstring
              </Typography>
              <LabelAndValue
                variant="body2"
                label="Override Level"
                value="Not Overrideable"
              />
              <LabelAndValue
                variant="body2"
                label="Depends On"
                value="Other rule"
              />
              <Typography variant="body2">&nbsp;</Typography>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="caption">Examples</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Input</TableCell>
                          <TableCell>Result</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell
                            style={{
                              display: "flex",
                              alignItems: "center",
                              flexWrap: "wrap",
                            }}
                          >
                            <AssessmentIcon color="primary" /> {"{'age'}"}: 17
                          </TableCell>
                          <TableCell>False</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell
                            style={{
                              display: "flex",
                              alignItems: "center",
                              flexWrap: "wrap",
                            }}
                          >
                            <AssessmentIcon color="primary" />
                            {"{'age'}"}: 21
                          </TableCell>
                          <TableCell>True</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption">Test Coverage</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">
                    100% branch coverage from 2 tests
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="caption">Source Code</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    fontFamily="Monospace"
                    fontSize="h6.fontSize"
                    border={1}
                    p={1}
                  >
                    if customer.calculated_income &gt; 50000 then pass
                    <br /> else if sum(customer.capital_gains.yearly.dividends)
                    &gt; 50000 then pass <br /> else fail
                  </Box>
                </AccordionDetails>
              </Accordion>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
