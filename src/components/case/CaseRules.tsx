import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RuleSummary from "../rule/RuleAccordion";
import RuleDetails from "../rule/RuleDetails";

export default function CaseRules(): JSX.Element {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <RuleSummary
            isRuleDefinition={false}
            hasWarning={true}
            ruleName="RUL001"
            ruleDescription="KYC Risk is low"
            ruleSubDescription="Check KYC customer risk to ensure it is within parameters"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails canBeOverridden={true} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleSummary
            isRuleDefinition={false}
            hasWarning={false}
            ruleName="RUL002"
            ruleDescription="No bankruptcy flag"
            ruleSubDescription="Borrower should not have filed any bankruptcies"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails canBeOverridden={false} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleSummary
            isRuleDefinition={false}
            hasWarning={false}
            ruleName="RUL003"
            ruleDescription="No open tax liens"
            ruleSubDescription="Borrower should not have any open tax liens"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails canBeOverridden={false} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleSummary
            isRuleDefinition={false}
            hasWarning={true}
            ruleName="RUL004"
            ruleDescription="No CCJs"
            ruleSubDescription="Borrower should not have any County Court Judgements"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails canBeOverridden={false} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <RuleSummary
            isRuleDefinition={false}
            hasWarning={false}
            ruleName="RUL005"
            ruleDescription="No hard enquiries"
            ruleSubDescription="Borrower should not have any hard enquiries in the past 6 months"
          />
        </AccordionSummary>
        <AccordionDetails>
          <RuleDetails canBeOverridden={false} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
