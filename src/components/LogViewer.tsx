import React from "react";
import MaterialTable from "material-table";
import { makeStyles, TablePagination } from "@material-ui/core";
import TableIcons from "./table/TableIcons";
import EventNoteIcon from "@material-ui/icons/EventNote";
import { getLog } from "../utils/Logger";

const useStyles = makeStyles((theme) => ({
  nowrap: {
    display: "flex",
    whiteSpace: "nowrap",
    overflow: "auto",
  },
}));

export default function LogViewer(): JSX.Element {
  const classes = useStyles();
  const alignment = "left";
  const logData = getLog();

  return (
    <div>
      <MaterialTable
        title=""
        icons={TableIcons}
        components={{
          Pagination: (props) => (
            <TablePagination
              {...props}
              rowsPerPageOptions={[20, 50, 100, 500, 1000]}
              style={{ width: "10" }}
            />
          ),
        }}
        columns={[
          {
            title: "Time",
            field: "time",
            cellStyle: {
              whiteSpace: "nowrap",
            },
            render: (rowData) => (
              <div className={classes.nowrap}>
                <EventNoteIcon fontSize="small" color="primary" />
                {rowData.time}
              </div>
            ),
          },
          {
            title: "Type",
            field: "type",
            cellStyle: {
              whiteSpace: "nowrap",
            },
            lookup: {
              Error: "Error",
              Warning: "Warning",
              Info: "Info",
              Debug: "Debug",
            },
          },
          {
            title: "Location",
            field: "location",
            cellStyle: {
              whiteSpace: "nowrap",
            },
          },
          {
            title: "Message",
            field: "message",
            cellStyle: {
              whiteSpace: "nowrap",
            },
          },
        ]}
        data={logData}
        options={{
          headerStyle: {
            whiteSpace: "nowrap",
          },
          search: true,
          filtering: true,
          padding: "dense",
          exportButton: true,
          pageSize: 20,
          searchFieldAlignment: alignment,
          toolbarButtonAlignment: alignment,
        }}
      />
    </div>
  );
}
