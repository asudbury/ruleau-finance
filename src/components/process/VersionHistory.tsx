import React from "react";
import MaterialTable from "material-table";
import { makeStyles, TablePagination } from "@material-ui/core";
import TableIcons from "../table/TableIcons";
import SubjectIcon from "@material-ui/icons/Subject";
import { VersionHistoryMockData } from "../../mockData/VersionHistoryMockData";
import { logInfo } from "../../utils/Logger";

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

interface VersionHistoryProps {
  onHistoryItemSelected: (id: string) => void;
}

export default function VersionHistory({
  onHistoryItemSelected,
}: VersionHistoryProps) {
  function handleSelectedRow(
    selectedRow:
      | {
          created: string;
          version: string;
          updatedBy: string;
          description: string;
        }
      | undefined
  ) {
    if (selectedRow) {
      const version = selectedRow.version;

      onHistoryItemSelected(version);
    }
  }

  const classes = useStyles();

  return (
    <div className={classes.container}>
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
            title: "Created",
            field: "created",
            cellStyle: {
              whiteSpace: "nowrap",
            },
            render: (rowData) => (
              <div className={classes.nowrap}>
                <SubjectIcon fontSize="small" color="primary" />{" "}
                {rowData.created}
              </div>
            ),
          },
          {
            title: "Version",
            field: "version",
            cellStyle: {
              whiteSpace: "nowrap",
            },
          },
          {
            title: "Updated By",
            field: "updatedBy",
            cellStyle: {
              whiteSpace: "nowrap",
            },
          },
          {
            title: "Description",
            field: "description",
            cellStyle: {
              whiteSpace: "nowrap",
            },
          },
        ]}
        data={VersionHistoryMockData}
        onRowClick={(evt, selectedRow) => handleSelectedRow(selectedRow)}
        options={{
          headerStyle: {
            whiteSpace: "nowrap",
          },
          search: false,
          filtering: false,
          padding: "dense",
          exportButton: false,
          exportFileName: "cases",
          pageSize: 10,
        }}
      />
    </div>
  );
}
