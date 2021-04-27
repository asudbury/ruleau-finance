import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { ListItemIcon, makeStyles } from "@material-ui/core";
import BallotIcon from "@material-ui/icons/Ballot";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import GetProcessesSelector from "../services/selectors/GetProcessesSelector";
import { Process } from "../services/models/Process";
import useUrlManager from "../hooks/useUrlManager";
import History from "../utils/History";

const useStyles = makeStyles(() => ({
  noPadding: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

export default function ProcessList() {
  const classes = useStyles();
  const [publicUrl, , formattedProcessName] = useUrlManager();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const [secondaryText, setSecondaryText] = useState(getProcessValue());

  const processes = GetProcessesSelector().payload as Array<Process>;

  function getProcessValue() {
    return formattedProcessName;
  }

  function getFormattedValue(title: string) {
    return title.replace(new RegExp(" ", "g"), "-");
  }

  const handleClickListItem = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);

    const item = processes[index];

    if (item) {
      setSecondaryText(item.name);
      History.push(
        publicUrl +
          "/process/" +
          encodeURIComponent(getFormattedValue(item.name))
      );
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  History.listen((location: { pathname: string | string[] }, action: any) => {
    let text = "";

    if (location.pathname.indexOf("process") > -1) {
      const processIndex = 3;
      const segments = window.location.pathname.split("/");

      text = segments[processIndex].replace(new RegExp("-", "g"), " ");
    }

    setSecondaryText(text);
  });

  return (
    <>
      {processes.length > 1 && (
        <div>
          <List
            component="nav"
            aria-label="Process list"
            className={classes.noPadding}
          >
            <ListItem
              className={classes.noPadding}
              button
              aria-haspopup="true"
              onClick={(event) => handleClickListItem(event)}
            >
              <ListItemText primary="Process" secondary={secondaryText} />
              <ExpandMoreIcon />
            </ListItem>
          </List>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {processes.map((process, index) => (
              <MenuItem
                key={process.id}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <ListItemIcon>
                    <BallotIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={process.name} />
                </div>
              </MenuItem>
            ))}
          </Menu>
        </div>
      )}
    </>
  );
}
