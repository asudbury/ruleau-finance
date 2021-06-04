import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Drawer, IconButton } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Rules from "../components/process/Rules";

const useStyles = makeStyles(() => ({
  drawerPaper: {
    width: "60%",
  },
}));

interface RulesContainerProps {
  open: boolean;
  onClose: () => void;
}

export default function RulesContainer({
  open,
  onClose,
}: RulesContainerProps): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Drawer
        open={open}
        variant="persistent"
        anchor="right"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <IconButton onClick={onClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <Rules />
      </Drawer>
    </>
  );
}
