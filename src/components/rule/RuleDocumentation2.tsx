import React from "react";
import {
  makeStyles,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import NetworkWifiIcon from "@material-ui/icons/NetworkWifi";
import LabelAndValue from "../core/LabelAndValue";
import RuleSourceCode from "./RuleSourceCode";
import RuleExamples from "./RuleExamples";

const useStyles = makeStyles(() => ({
  ExpandedIcon: {
    "& div.MuiAccordionSummary-expandIcon": {
      position: "absolute",
      right: "99%",
    },
  },
}));

interface RuleDocumentationProps {
  showSwitch: boolean;
  ruleName: string;
  ruleDescription: string;
  ruleSubDescription: string;
  overrideLevel: string;
}

export default function RuleDocumentation({
  showSwitch,
  ruleName,
  ruleDescription,
  ruleSubDescription,
  overrideLevel,
}: RuleDocumentationProps) {
  const classes = useStyles();

  const description = ruleDescription + " - " + ruleSubDescription;

  const ruleExamples = [
    {
      test: 'proprietary_risk_score_decline_flow(None, {"creditBureau": {"RiskScore": 580}})',
      result: "True",
      payload: '{"creditBureau": {"RiskScore": 580}}',
      context: null,
    },
    {
      test: 'proprietary_risk_score_decline_flow(None, {"creditBureau": {"RiskScore": 600}})',
      result: "False",
      payload: '{"creditBureau": {"RiskScore": 600}}',
      context: null,
    },
  ];

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={1} />
        <Grid item xs={11}>
          <div>
            <LabelAndValue
              variant="body2"
              label="Description"
              value={description}
            />
            <LabelAndValue
              variant="body2"
              label="Override Level"
              value={overrideLevel}
            />
            <LabelAndValue
              variant="body2"
              label="Depends On"
              value="Other rule"
            />
            <Typography variant="body2">&nbsp;</Typography>
            <RuleExamples ruleExamples={ruleExamples} />
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                className={classes.ExpandedIcon}
              >
                <Grid container spacing={1} direction="row">
                  <Grid item>
                    <NetworkWifiIcon color="secondary" fontSize="small" />
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">Test Coverage</Typography>
                  </Grid>
                </Grid>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  100% branch coverage from 2 tests
                </Typography>
              </AccordionDetails>
            </Accordion>
            <RuleSourceCode
              sourceCode="if customer.income > 50000 then pass
                    else if sum(customer.capital_gains.dividends)
                    > 50000 then pass else fail"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
