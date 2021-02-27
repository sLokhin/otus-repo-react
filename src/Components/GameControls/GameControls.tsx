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
    console.log("startGame");
  };

  const pauseGame = (): void => {
    const options = {
      pause: true,
      reset: false,
    };
    setControlsState(options);
    console.log("pauseGame");
  };

  const resetGame = (): void => {
    const options = {
      pause: true,
      reset: true,
    };
    setControlsState(options);
    console.log("resetGame");
  };

  return (
    <ControlsWrapper className={"controls-wrapper"}>
      <BlueButton
        classes={{ root: "control-button-play" }}
        variant={"contained"}
        color={"primary"}
        startIcon={<PlayArrowIcon />}
        onClick={startGame}
      >
        Play
      </BlueButton>
      <LightBlueButton
        classes={{ root: "control-button-pause" }}
        variant={"contained"}
        color={"primary"}
        startIcon={<PauseIcon />}
        onClick={pauseGame}
      >
        Pause
      </LightBlueButton>
      <LightGreenButton
        classes={{ root: "control-button-reset" }}
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
