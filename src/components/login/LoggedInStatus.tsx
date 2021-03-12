import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import AccountIcon from "../../components/icons/AccountIcon";
import { Button, IconButton } from "@material-ui/core";
import GetUserName from "../../services/selectors/GetUserName";

export default function LoggedInStatus(props: { onLogout: () => void }) {
  const { onLogout } = props;

  const emailAddress = GetUserName();

  return (
    <PopupState variant="popover">
      {(popupState: any) => (
        <div>
          <IconButton
            data-testid="loggedInStatusIcon"
            edge="end"
            color="inherit"
            aria-label="account icon"
          >
            <AccountIcon fontSize="large" {...bindTrigger(popupState)} />
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
                <ListItemText primary={emailAddress} />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem>
                <Button
                  data-testid="loggedInStatusLogoutButton"
                  variant="outlined"
                  color="primary"
                  onClick={onLogout}
                >
                  Logout
                </Button>
              </ListItem>
            </List>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
