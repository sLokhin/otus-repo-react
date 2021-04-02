import React, { FC } from "react";
import { Button, withStyles } from "@material-ui/core";
import { lightGreen, lightBlue, blue } from "@material-ui/core/colors";
import styled from "@emotion/styled";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

const ControlsWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  width: 400px;
`;

const BlueButton = withStyles(() => ({
  root: {
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700],
    },
  },
}))(Button);

const LightBlueButton = withStyles(() => ({
  root: {
    backgroundColor: lightBlue[500],
    "&:hover": {
      backgroundColor: lightBlue[700],
    },
  },
}))(Button);

const LightGreenButton = withStyles(() => ({
  root: {
    backgroundColor: lightGreen[500],
    "&:hover": {
      backgroundColor: lightGreen[700],
    },
  },
}))(Button);

const buttonPlayClasses = { root: "control-button-play" };
const buttonPauseClasses = { root: "control-button-pause" };
const buttonResetClasses = { root: "control-button-reset" };

interface GameControlsProps {
  setControlsState: (options: { pause: boolean; reset: boolean }) => void;
}

const STATE_START = {
  pause: false,
  reset: false,
};

const STATE_PAUSE = {
  pause: true,
  reset: false,
};

const STATE_RESET = {
  pause: true,
  reset: true,
};

export const GameControls: FC<GameControlsProps> = (
  props: GameControlsProps
) => {
  const { setControlsState } = props;

  return (
    <ControlsWrapper>
      <BlueButton
        classes={buttonPlayClasses}
        variant={"contained"}
        color={"primary"}
        startIcon={<PlayArrowIcon />}
        onClick={() => setControlsState(STATE_START)}
      >
        Play
      </BlueButton>
      <LightBlueButton
        classes={buttonPauseClasses}
        variant={"contained"}
        color={"primary"}
        startIcon={<PauseIcon />}
        onClick={() => setControlsState(STATE_PAUSE)}
      >
        Pause
      </LightBlueButton>
      <LightGreenButton
        classes={buttonResetClasses}
        variant={"contained"}
        color={"primary"}
        startIcon={<RotateLeftIcon />}
        onClick={() => setControlsState(STATE_RESET)}
      >
        Reset
      </LightGreenButton>
    </ControlsWrapper>
  );
};
