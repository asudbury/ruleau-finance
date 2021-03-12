import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core";
import TableIcons from "../table/TableIcons";
import { logInfo } from "../../utils/Logger";
import { API_URL, CASES } from "../../services/constants/Endpoints";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      width: 600,
    },
  },
  nowrap: {
    display: "flex",
    whiteSpace: "nowrap",
    overflow: "auto",
  },
}));

interface CasesProps {
  onCaseSelected: (caseID: string) => void;
}

export default function Cases({ onCaseSelected }: CasesProps): JSX.Element {
  const [caseData, setCaseData] = useState([]);

  useEffect(() => {
    const url = API_URL + CASES;

    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        logInfo(res);
        setCaseData(res);
      });
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.container} data-testid="casesTableDiv">
      <MaterialTable
        data-testid="casesTable"
        title=""
        icons={TableIcons}
        columns={[
          {
            title: "Case ID",
            field: "id",
            cellStyle: {
              whiteSpace: "nowrap",
            },
          },
          {
            title: "Open/Closed",
            field: "case_status",
            cellStyle: {
              whiteSpace: "nowrap",
            },
            lookup: { false: "Open", true: "Closed" },
          },
          {
            title: "Result",
            field: "result",
            cellStyle: {
              whiteSpace: "nowrap",
            },
            lookup: { 1: "Passed", 2: "Warning", 3: "Failed" },
          },
          {
            title: "Date Processed",
            field: "created_at",
            cellStyle: {
              whiteSpace: "nowrap",
            },
          },
        ]}
        data={caseData}
        options={{
          headerStyle: {
            whiteSpace: "nowrap",
          },
          search: false,
          filtering: false,
          padding: "dense",
          exportButton: false,
          pageSize: 10,
        }}
      />
    </div>
  );
}
