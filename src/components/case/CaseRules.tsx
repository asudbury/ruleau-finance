/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import RuleAccordion from "../rule/RuleAccordion";
import RuleDetails from "../rule/RuleDetails";
import SetSelectedRuleWarning from "../../services/selectors/SetSelectedRuleWarning";
import GetSelectedRuleWarningSelector from "../../services/selectors/GetSelectedRuleWarningSelector";
import { logDebug } from "../../utils/Logger";

const rulesData = [
  {
    ruleName: "RUL001",
    ruleDescription: "KYC Risk is low",
    ruleSubDescription:
      "Check KYC customer risk to ensure it is within parameters",
    overrideMessage: "",
    overrideLevel: "NO OVERRIDE",
    hasWarning: true,
  },
  {
    ruleName: "RUL002",
    ruleDescription: "No bankruptcy flag",
    ruleSubDescription: "Borrower should not have filed any bankruptcies",
    overrideMessage: "Strong evidence of steady income needed to override",
    overrideLevel: "2",
    hasWarning: false,
  },
  {
    ruleName: "RUL003",
    ruleDescription: "No open tax liens",
    ruleSubDescription: "Borrower should not have any open tax liens",
    overrideMessage: "Open tax lien must be about to expire or < £100/month",
    overrideLevel: "2",
    hasWarning: false,
  },
  {
    ruleName: "RUL004",
    ruleDescription: "No CCJs",
    ruleSubDescription: "Borrower should not have any County Court Judgements",
    overrideMessage: "Only override on manager’s authority",
    overrideLevel: "3",
    hasWarning: true,
  },
  {
    ruleName: "RUL005",
    ruleDescription: "No hard enquiries",
    ruleSubDescription:
      "Borrower should not have any enquiries in past 6 months",
    overrideMessage: "Confirm hard enquiry is about to expire",
    overrideLevel: "1",
    hasWarning: false,
  },
];

export default function CaseRules(): JSX.Element {
  logDebug("CaseRules", "Start");
  const [expanded, setExpanded] = useState<string | false>("");

  const selectedRuleWarning = GetSelectedRuleWarningSelector();

  const refs = rulesData.map((rule) => {
    return {
      ruleName: rule.ruleName,
      refPointer: React.createRef<HTMLDivElement>(),
    };
  });

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    logDebug("CaseRules", "handleChange");
    SetSelectedRuleWarning("");
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    logDebug(
      "CaseRules",
      "useEffect selectedRuleWarning=" + selectedRuleWarning
    );
    if (selectedRuleWarning) {
      const ref = getRefPointer(selectedRuleWarning) as any;

      if (ref) {
        setTimeout(() => {
          ref.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);

        SetSelectedRuleWarning("");
      }
    }
  }, [selectedRuleWarning]);

  function getRefPointer(
    ruleName: string
  ): React.RefObject<HTMLDivElement> | null {
    const result = refs.filter((ref) => {
      return ref.ruleName === ruleName;
    });

    if (result) {
      return result[0].refPointer;
    }

    return null;
  }

  function expandAccordion(ruleName: string): boolean {
    logDebug(
      "CaseRules",
      "expandAccordion rule=" + ruleName + " selected=" + selectedRuleWarning
    );

    return expanded === ruleName || selectedRuleWarning === ruleName;
  }

  return (
    <div>
      {rulesData.map((rule, index) => (
        <Accordion
          ref={getRefPointer(rule.ruleName)}
          expanded={expandAccordion(rule.ruleName)}
          onChange={handleChange(rule.ruleName)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <RuleAccordion
              isRuleDefinition={false}
              hasWarning={rule.hasWarning}
              ruleName={rule.ruleName}
              ruleDescription={rule.ruleDescription}
              ruleSubDescription={rule.ruleSubDescription}
            />
          </AccordionSummary>
          <AccordionDetails>
            <RuleDetails
              canBeOverridden={false}
              overrideMessage={rule.overrideMessage}
              ruleName={rule.ruleName}
              ruleDescription={rule.ruleDescription}
              ruleSubDescription={rule.ruleSubDescription}
              overrideLevel={rule.overrideLevel}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
