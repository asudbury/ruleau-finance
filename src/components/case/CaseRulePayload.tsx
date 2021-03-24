import React from "react";

import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import GrainIcon from "@material-ui/icons/Grain";

interface CaseRulePayloadProps {
  rulePayload: any;
  type: string;
}

export default function CaseRulePayload({
  rulePayload,
  type,
}: CaseRulePayloadProps): JSX.Element {
  if (!rulePayload) {
    rulePayload = [
      {
        key: "data." + type.toLowerCase(),
        value: "100",
        accessed_count: 1,
      },
    ];

    if (type === "RUL001") {
      rulePayload = [
        {
          key: "data.kyc",
          value: "high",
          accessed_count: 1,
        },
      ];
    }

    if (type === "RUL004") {
      rulePayload = [
        {
          key: "data.ccjs",
          value: "[]",
          accessed_count: 1,
        },
      ];
    }
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>Rule Payload</Typography>

        <TableContainer component={Paper} style={{ width: "max-content" }}>
          <Table size="small" aria-label="rule payload">
            <TableHead>
              <TableRow>
                <TableCell>Key</TableCell>
                <TableCell>Value</TableCell>
                <TableCell align="center">Accessed Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rulePayload.map(
                (item: {
                  key: any;
                  value: any;
                  accessed_count:
                    | any
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                }) => (
                  <TableRow key={item.key}>
                    <TableCell>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          flexWrap: "wrap",
                        }}
                      >
                        <GrainIcon color="primary" />
                        {item.key}
                      </div>
                    </TableCell>
                    <TableCell>
                      <pre>{JSON.stringify(item.value, null, 2)}</pre>
                    </TableCell>
                    <TableCell align="center">{item.accessed_count}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
