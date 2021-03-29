import React, { useState, useEffect } from "react";
import { FormControl, Grid, Typography, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import RuleauButton from "../core/RuleauButton";

interface CaseRuleOverrideProps {
  ruleName: string;
  hasOverride: boolean;
  onUpdateOverride: (
    ruleName: string,
    reason: string,
    applied: boolean
  ) => void;
}

export default function CaseRuleOverride({
  ruleName,
  hasOverride,
  onUpdateOverride,
}: CaseRuleOverrideProps): JSX.Element {
  let label = "Override Reason";
  let buttonLabel = "Save Override";
  let reasonText = "You need to enter a reason for the override";
  let applied = true;
  let errorMessage = "There has been an error saving the override";
  const message = "The override has been saved";

  if (hasOverride) {
    label = "Removal Reason";
    buttonLabel = "Remove Override";
    reasonText = "You need to enter a reason for the removal of the override";
    applied = false;
    errorMessage = "There has been an error removing the override";
  }

  const [overrideReason, setOverrideReason] = useState("");
  const [invalidOverrideText, setInvalidOverrideText] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [overrideSaved, setOverrideSaved] = useState(false);

  function handleUpdateOverride() {
    setShowErrorMessage(false);

    if (!overrideReason) {
      setInvalidOverrideText(true);
    } else {
      setInvalidOverrideText(false);
      setOverrideSaved(true);
      ///onUpdateOverride(ruleName, overrideReason, applied);
    }
  }

  function handleOverrideReasonChange(e: React.ChangeEvent<HTMLInputElement>) {
    setOverrideReason(e.target.value);
  }

  function handleReturnToCaseList() {
    window.history.back();
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={11}>
        <Typography gutterBottom>Override</Typography>
      </Grid>
      <Grid item xs={12}>
        {!overrideSaved && (
          <FormControl style={{ width: `50%` }}>
            <TextField
              data-testid="overrideText"
              label={label}
              value={overrideReason}
              multiline
              rows={6}
              inputProps={{
                maxLength: 2000,
                "aria-label": "Override Reason Text",
              }}
              variant="filled"
              error={invalidOverrideText}
              helperText={invalidOverrideText === true ? reasonText : ""}
              onChange={handleOverrideReasonChange}
            />
          </FormControl>
        )}
      </Grid>
      {showErrorMessage && (
        <Grid item xs={6}>
          <Alert severity="error" aria-label="Error Message">
            {errorMessage}
          </Alert>
        </Grid>
      )}
      <Grid item xs={11}>
        {!overrideSaved && (
          <RuleauButton
            datatestid="overrideButton"
            arialabel="Override Button"
            onClick={handleUpdateOverride}
            content={buttonLabel}
          />
        )}
      </Grid>
      {overrideSaved && (
        <>
          <Grid item xs={6}>
            <Alert severity="success" aria-label="Info Message">
              {message}
            </Alert>
          </Grid>
          <Grid item xs={12}>
            <RuleauButton
              datatestid="returnToCaseListButton"
              arialabel="Return to Case List"
              onClick={handleReturnToCaseList}
              content="Return to Case List"
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}
