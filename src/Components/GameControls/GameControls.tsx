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

export const GameControls: FC<GameControlsProps> = (
  props: GameControlsProps
) => {
  const { setControlsState } = props;
  const startGame = (): void => {
    const options = {
      pause: false,
      reset: false,
    };
    setControlsState(options);
  };

  const pauseGame = (): void => {
    const options = {
      pause: true,
      reset: false,
    };
    setControlsState(options);
  };

  const resetGame = (): void => {
    const options = {
      pause: true,
      reset: true,
    };
    setControlsState(options);
  };

  return (
    <ControlsWrapper className={"controls-wrapper"}>
      <BlueButton
        classes={buttonPlayClasses}
        variant={"contained"}
        color={"primary"}
        startIcon={<PlayArrowIcon />}
        onClick={startGame}
      >
        Play
      </BlueButton>
      <LightBlueButton
        classes={buttonPauseClasses}
        variant={"contained"}
        color={"primary"}
        startIcon={<PauseIcon />}
        onClick={pauseGame}
      >
        Pause
      </LightBlueButton>
      <LightGreenButton
        classes={buttonResetClasses}
        variant={"contained"}
        color={"primary"}
        startIcon={<RotateLeftIcon />}
        onClick={resetGame}
      >
        Reset
      </LightGreenButton>
    </ControlsWrapper>
  );
};
