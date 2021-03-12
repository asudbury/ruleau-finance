import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Popover from "@material-ui/core/Popover";
import Switch from "@material-ui/core/Switch";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import SettingsIcon from "../components/icons/SettingsIcon";
import { IconButton, Typography } from "@material-ui/core";
import { version as appVersion } from "../../package.json";

export default function Settings(props: {
  themeName: string;
  onDarkModeChange: () => void;
}) {
  const { themeName, onDarkModeChange } = props;

  return (
    <PopupState variant="popover">
      {(popupState: any) => (
        <div>
          <IconButton edge="end" color="inherit" aria-label="settings icon">
            <SettingsIcon fontSize="large" {...bindTrigger(popupState)} />
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            PaperProps={{
              style: { width: "300" },
            }}
          >
            <List>
              <ListItem>
                <ListItemText primary="Dark Mode" />
                <Switch
                  onChange={onDarkModeChange}
                  checked={themeName === "dark"}
                  color="primary"
                />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <ListItemText>
                  <Typography variant="caption">Version</Typography>
                </ListItemText>
                <Typography variant="caption">{appVersion}</Typography>
              </ListItem>
            </List>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
