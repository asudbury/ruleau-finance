import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import AccountIcon from "../../components/icons/AccountIcon";
import { Button, IconButton } from "@material-ui/core";

export default function LoggedOutStatus(props: { onLogin: () => void }) {
  const { onLogin } = props;

  return (
    <PopupState variant="popover">
      {(popupState: any) => (
        <div>
          <IconButton
            data-testid="loggedOutStatusIcon"
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
                <Button
                  data-testid="loggedOutStatusLoginButton"
                  variant="outlined"
                  color="primary"
                  onClick={onLogin}
                >
                  Login
                </Button>
              </ListItem>
            </List>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
