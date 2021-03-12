import React from "react";
import { ReactComponent as Icon } from "./account.svg";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const SettingsIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <Icon />
    </SvgIcon>
  );
};

export default SettingsIcon;
