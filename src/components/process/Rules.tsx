import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RuleAccordion from "../rule/RuleAccordion";
import RuleSource from "../rule/RuleSource";
import RuleDocumentation from "../rule/RuleDocumentation2";

export default function Rules() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RuleAccordion
            isRuleDefinition={true}
            hasWarning={false}
            ruleName="r12"
            ruleDescription="Customer must be over 18"
            ruleSubDescription="This card is only available to adults"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <RuleSource />
            <RuleDocumentation showSwitch={true} />
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleAccordion
            isRuleDefinition={true}
            hasWarning={false}
            ruleName="r13"
            ruleDescription="Income must be over £50k"
            ruleSubDescription="Regular income must be over £50,000 per year"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <RuleSource />
            <RuleDocumentation showSwitch={true} />
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
