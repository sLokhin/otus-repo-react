import React, { FC } from "react";
import { Button, withStyles } from "@material-ui/core";
import { lightGreen, lightBlue, blue } from "@material-ui/core/colors";

const BlueButton = withStyles(() => ({
  root: {
    backgroundColor: blue[700],
    transition: "none",
    "&:hover": {
      backgroundColor: blue[900],
    },
  },
}))(Button);

const LightBlueButton = withStyles(() => ({
  root: {
    backgroundColor: lightBlue[500],
    transition: "none",
    "&:hover": {
      backgroundColor: lightBlue[600],
    },
  },
}))(Button);

const LightGreenButton = withStyles(() => ({
  root: {
    backgroundColor: lightGreen[500],
    transition: "none",
    pointerEvents: "none",
  },
}))(Button);

export const stylesMap = {
  blue: BlueButton,
  lightBlue: LightBlueButton,
};

export type possibleStyles = keyof typeof stylesMap;

type ControlButtonProps = {
  style: possibleStyles;
  startIcon?: React.ReactNode;
  text?: string;
  disabled?: boolean;
  highlight?: boolean;
  onClick?: () => void;
};

export const ControlButton: FC<ControlButtonProps> = (
  props: ControlButtonProps
) => {
  const {
    style = "blue",
    startIcon,
    text = "Default",
    disabled = false,
    highlight = false,
    onClick,
  } = props;

  const StyledComponent = highlight ? LightGreenButton : stylesMap[style];

  return (
    <StyledComponent
      variant={"contained"}
      color={"primary"}
      startIcon={startIcon}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </StyledComponent>
  );
};
