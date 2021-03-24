import React from "react";
import {
  Grid,
  Typography,
  FormControlLabel,
  Switch,
  Divider,
} from "@material-ui/core";
import RuleDocumentation from "./RuleDocumentation";
import RuleOverride from "./RuleOverride";
import { logInfo } from "../../utils/Logger";
import CaseRulePayload from "../case/CaseRulePayload";

interface RuleDetailsProps {
  canBeOverridden: boolean;
  overrideMessage: string;
  ruleName: string;
  ruleDescription: string;
  ruleSubDescription: string;
  overrideLevel: string;
}

export default function RuleDetails({
  canBeOverridden,
  ruleName,
  ruleDescription,
  ruleSubDescription,
  overrideLevel,
  overrideMessage,
}: RuleDetailsProps) {
  const [showDocumentation, setShowDocumentation] = React.useState<boolean>(
    false
  );
  const [hasOverride, setHasOverride] = React.useState<boolean>(false);

  function handleShowDocumentation() {
    setShowDocumentation(!showDocumentation);
  }

  function handleRemoveOverride() {
    logInfo("handleRemoveOverride");
    setHasOverride(false);
  }

  function handleSaveOverride() {
    logInfo("handleSaveOverride");
    setHasOverride(true);
  }

  logInfo("hasOverride=" + hasOverride);

  return (
    <Grid container spacing={1}>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        <FormControlLabel
          control={
            <Switch
              checked={showDocumentation}
              onChange={handleShowDocumentation}
              color="primary"
            />
          }
          label={
            <Typography variant="caption">Show Rule Documentation</Typography>
          }
        />
        {showDocumentation && (
          <div>
            <Divider />
            <RuleDocumentation
              showSwitch={false}
              ruleName={ruleName}
              ruleDescription={ruleDescription}
              ruleSubDescription={ruleSubDescription}
              overrideLevel={overrideLevel}
            />
          </div>
        )}
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        <CaseRulePayload rulePayload={null} type={ruleName} />
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item xs={11}>
        <RuleOverride
          hasOverride={hasOverride}
          canBeOverridden={canBeOverridden}
          onSaveOverride={handleSaveOverride}
          onRemoveOverride={handleRemoveOverride}
          overrideMessage={overrideMessage}
        />
      </Grid>
    </Grid>
  );
}
