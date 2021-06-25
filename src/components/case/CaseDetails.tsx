import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Grid,
  Link,
  Typography,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import LabelAndValue from "../core/LabelAndValue";
import RuleauProgressButton from "../core/RuleauProgressButton";
import RuleauSyntaxHighlighter from "../core/RuleauSyntaxHighlighter";

interface CaseDetailsProps {
  isClosed: boolean;
  onCloseCase: () => void;
  onReopenCase: () => void;
  onShowRuleDocumentation: () => void;
}

export default function CaseDetails({
  isClosed,
  onCloseCase,
  onReopenCase,
  onShowRuleDocumentation,
}: CaseDetailsProps) {
  const history = useHistory();

  const { caseId } = useParams<{ caseId: string }>();

  const [showPayload, setShowPayload] = useState(false);

  function handleShowPayload() {
    setShowPayload(!showPayload);
  }

  function handleCloseCase() {
    setLoading(true);

    setTimeout(() => {
      onCloseCase();
      history.goBack();
    }, 1000);
  }

  function handleReopenCase() {
    setLoading(true);

    setTimeout(() => {
      onReopenCase();
      history.goBack();
    }, 1000);
  }

  const [loading, setLoading] = useState(false);

  const payload = '{"kyc": "low", "ccjs": [], "fico_score": 150 }';

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <LabelAndValue variant="h6" label="Case ID" value={caseId} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <Typography variant="body1">Execution:</Typography>
          <Select value={3} style={{ marginLeft: 10 }}>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="1">1</MenuItem>
          </Select>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <LabelAndValue
          variant="body1"
          label="Processed On"
          value="12 July 2020 13:10"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LabelAndValue variant="body1" label="Name" value="John Smith" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LabelAndValue
          variant="body1"
          label="Date of Birth"
          value="05 March 1980"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LabelAndValue
          variant="body1"
          label="Customer ID"
          value="C33-44-567813"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <LabelAndValue
          variant="body1"
          label="Account Number"
          value="345672345"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        {!isClosed && (
          <RuleauProgressButton
            datatestid="closeCase"
            arialabel="Close Case Button"
            onClick={handleCloseCase}
            loading={loading}
            content="Close Case"
          />
        )}
        {isClosed && (
          <RuleauProgressButton
            datatestid="reopenCase"
            arialabel="Reopen Case Button"
            onClick={handleReopenCase}
            loading={loading}
            content="Reopen Case"
          />
        )}
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControlLabel
          control={
            <Switch checked={showPayload} onChange={handleShowPayload} />
          }
          label={<Typography variant="caption">Show Payload</Typography>}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container direction="row" data-testid="infoMessage">
          <Grid item>
            <ContactSupportOutlinedIcon
              fontSize="small"
              onClick={onShowRuleDocumentation}
              style={{ cursor: "hand" }}
            />
          </Grid>
          <Grid item>
            <Link
              href="#"
              onClick={onShowRuleDocumentation}
              color="textPrimary"
              style={{ textDecoration: "underline" }}
            >
              Rule Documentation
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        {showPayload && (
          <RuleauSyntaxHighlighter text={payload} language="json" />
        )}
      </Grid>
    </Grid>
  );
}
