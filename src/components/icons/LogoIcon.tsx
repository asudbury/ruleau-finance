import React from "react";
import { ReactComponent as Icon } from "./logo.svg";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";

const LogoIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props}>
      <Icon />
    </SvgIcon>
  );
};

export default LogoIcon;
