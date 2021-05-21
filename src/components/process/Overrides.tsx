import React from "react";
import MaterialTable from "material-table";
import { makeStyles, TablePagination } from "@material-ui/core";
import SubjectIcon from "@material-ui/icons/Subject";
import WorkIcon from "@material-ui/icons/Work";
import SortIcon from "@material-ui/icons/Sort";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import TableIcons from "../table/TableIcons";
import { format } from "date-fns";
import { logDebug } from "../../utils/Logger";

import { TestProcessCaseOverrides } from "../../testData/TestProcessCaseOverrides";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      width: 600,
    },
  },
  error: {
    color: theme.palette.error.main,
  },
  warning: {
    color: theme.palette.warning.main,
  },
  success: {
    color: theme.palette.success.main,
  },
  nowrap: {
    display: "flex",
    whiteSpace: "nowrap",
    overflow: "auto",
  },
}));

interface OverridesProps {
  onCaseSelected: (caseID: string) => void;
}

export default function Overrides({
  onCaseSelected,
}: OverridesProps): JSX.Element {
  logDebug("Overrides", "Start");

  const alignment = "left";

  let data = [] as any;

  const overridesData = TestProcessCaseOverrides;

  if (Array.isArray(overridesData)) {
    const newData = [...overridesData];

    data = newData.map((overrideItem) => {
      const formattedDate = format(
        new Date(overrideItem.created_at),
        "dd-MMM-yyyy HH:mm:ss"
      );

      return {
        clientCaseId: overrideItem.case.client_case_id,
        ruleName: overrideItem.rule.rule_name,
        overrideReason: overrideItem.override_reason,
        applied: overrideItem.applied,
        createdAt: formattedDate,
      };
    });
  }

  const classes = useStyles();

  function handleSelectedRow(
    selectedRow:
      | {
          clientCaseId: string;
          ruleName: string;
          overrideReason: string;
          applied: boolean;
          createdAt: string;
        }
      | undefined
  ) {
    if (selectedRow) {
      const clientCaseId = selectedRow.clientCaseId;

      logDebug("Overrides", "handleSelectedRow clientCaseId=" + clientCaseId);

      onCaseSelected(clientCaseId + "?from=overrides");
    }
  }
  return (
    <div className={classes.container}>
      {overridesData && (
        <MaterialTable
          title=""
          icons={TableIcons}
          components={{
            Pagination: (props) => (
              <TablePagination
                {...props}
                rowsPerPageOptions={[5, 10, 50, 100, 500, 1000]}
                style={{ width: "10" }}
              />
            ),
          }}
          columns={[
            {
              title: "Date Time",
              field: "createdAt",
              cellStyle: {
                whiteSpace: "nowrap",
              },
              render: (rowData, type) => {
                if (type === "row") {
                  return (
                    <div className={classes.nowrap}>
                      <SubjectIcon fontSize="small" color="primary" />
                      {rowData.createdAt}
                    </div>
                  );
                }
                return rowData;
              },
            },
            {
              title: "Case ID",
              field: "clientCaseId",
              render: (rowData, type) => {
                if (type === "row") {
                  return (
                    <div className={classes.nowrap}>
                      <WorkIcon fontSize="small" color="primary" />
                      {rowData.clientCaseId}
                    </div>
                  );
                }
                return rowData;
              },
            },
            {
              title: "Rule Name",
              field: "ruleName",
              render: (rowData, type) => {
                if (type === "row") {
                  return (
                    <div className={classes.nowrap}>
                      <SortIcon fontSize="small" color="primary" />
                      {rowData.ruleName}
                    </div>
                  );
                }
                return rowData;
              },
            },
            {
              title: "Applied/Removed",
              field: "applied",
              lookup: { true: "Applied", false: "Removed" },
              render: (rowData, type) => {
                if (type === "row") {
                  return (
                    <div className={classes.nowrap}>
                      {rowData.applied === true && (
                        <CheckCircleOutlineOutlinedIcon
                          fontSize="small"
                          className={classes.success}
                        />
                      )}
                      {rowData.applied === false && (
                        <HighlightOffOutlinedIcon
                          fontSize="small"
                          className={classes.error}
                        />
                      )}
                      {rowData.applied === true ? "Applied" : "Removed"}
                    </div>
                  );
                }
                return rowData;
              },
            },
            {
              title: "Reason",
              field: "overrideReason",
            },
          ]}
          data={data}
          onRowClick={(evt, selectedRow) => handleSelectedRow(selectedRow)}
          options={{
            headerStyle: {
              whiteSpace: "nowrap",
            },
            filtering: true,
            padding: "dense",
            searchFieldAlignment: alignment,
            toolbarButtonAlignment: alignment,
            exportButton: true,
            exportFileName: "overrides",
            pageSize: 10,
            grouping: true,
          }}
        />
      )}
    </div>
  );
}
