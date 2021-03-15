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
            ruleName="RUL001"
            ruleDescription="KYC Risk is low"
            ruleSubDescription="Check KYC customer risk to ensure it is within parameters"
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
            ruleName="RUL002"
            ruleDescription="No bankruptcy flag"
            ruleSubDescription="Borrower should not have filed any bankruptcies"
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
            ruleName="RUL003"
            ruleDescription="No open tax liens"
            ruleSubDescription="Borrower should not have any open tax liens"
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
            ruleName="RUL004"
            ruleDescription="No CCJs"
            ruleSubDescription="Borrower should not have any County Court Judgements"
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
            ruleName="RUL005"
            ruleDescription="No hard enquiries"
            ruleSubDescription="Borrower should not have any hard enquiries in the past 6 months"
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
