import React from "react";
import MaterialTable from "material-table";
import { makeStyles, TablePagination } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import WorkIcon from "@material-ui/icons/Work";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import TableIcons from "../table/MockTableIcons";
import { logInfo } from "../../utils/Logger";

import GetCases from "../../services/selectors/GetCases";
import { CaseMockData } from "../../mockData/CaseMockData";

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

interface CasesProps {
  openClosed: string[];
  result: string[];
  onCaseSelected: (caseID: string) => void;
}

export default function Cases({
  openClosed,
  result,
  onCaseSelected,
}: CasesProps) {
  logInfo("Cases openClose=" + openClosed);
  logInfo("Cases result=" + result);

  if (openClosed.length === 0) {
    openClosed = [];
  }

  if (openClosed.length === 1) {
    if (openClosed[0] === "") {
      openClosed = [];
    }
  }

  if (result.length === 0) {
    result = [];
  }

  if (result.length === 1) {
    if (result[0] === "") {
      result = [];
    }
  }

  const alignment = "left";

  //// const cases = GetCases();
  const caseData = CaseMockData;

  function handleSelectedRow(
    selectedRow:
      | {
          dateProcessed: string;
          caseID: string;
          executionNo: number;
          status: number;
          result: number;
          failures: number;
        }
      | undefined
  ) {
    if (selectedRow) {
      const caseId = selectedRow.caseID;

      onCaseSelected(caseId);
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
      {caseData && (
        <MaterialTable
          title=""
          icons={TableIcons}
          onFilterChange={(filters) => {
            logInfo("onFilterChange filters=" + filters);
          }}
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
              title: "Case ID",
              field: "caseID",
              cellStyle: {
                whiteSpace: "nowrap",
              },
              render: (rowData) => (
                <div className={classes.nowrap}>
                  <WorkIcon fontSize="small" color="primary" />{" "}
                  {rowData.caseID}
                </div>
              ),
            },
            {
              title: "Open/Closed",
              field: "status",
              cellStyle: {
                whiteSpace: "nowrap",
              },
              lookup: { 1: "Open", 2: "Closed" },
              defaultFilter: openClosed,
            },
            {
              title: "Result",
              field: "result",
              cellStyle: {
                whiteSpace: "nowrap",
              },
              lookup: { 1: "Passed", 2: "Warning", 3: "Failed" },
              defaultFilter: result,
              render: (rowData) => (
                <div>
                  {rowData.result === 1 && (
                    <div className={`${classes.nowrap} ${classes.success}`}>
                      <CheckCircleOutlineOutlinedIcon
                        fontSize="small"
                        color="primary"
                      />{" "}
                      Passed
                    </div>
                  )}

                  {rowData.result === 2 && (
                    <div className={`${classes.nowrap} ${classes.warning}`}>
                      <ReportProblemOutlinedIcon
                        fontSize="small"
                        color="primary"
                        style={{ color: orange[500] }}
                      />{" "}
                      Warning
                    </div>
                  )}
                  {rowData.result === 3 && (
                    <div className={`${classes.nowrap} ${classes.error}`}>
                      <HighlightOffOutlinedIcon
                        fontSize="small"
                        color="error"
                      />{" "}
                      Failed
                    </div>
                  )}
                </div>
              ),
            },
            {
              title: "Date Processed",
              field: "dateProcessed",
              cellStyle: {
                whiteSpace: "nowrap",
              },
            },
          ]}
          data={caseData}
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
            exportFileName: "cases",
            pageSize: 10,
          }}
        />
      )}
    </div>
  );
}
