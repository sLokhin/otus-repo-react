import React from "react";
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

interface IGameControlsState {
  pause: boolean;
}

export class GameControls extends React.Component<
  Record<string, unknown>,
  IGameControlsState
> {
  state = {
    pause: true,
  } as IGameControlsState;

  startGame = (): void => {
    this.setState({
      pause: false,
    });
    console.log("startGame");
  };

  pauseGame = (): void => {
    this.setState({
      pause: true,
    });
    console.log("pauseGame");
  };

  resetGame = (): void => {
    this.setState({
      pause: true,
    });
    console.log("resetGame");
  };

  render(): React.ReactNode {
    return (
      <ControlsWrapper>
        <BlueButton
          variant={"contained"}
          color={"primary"}
          startIcon={<PlayArrowIcon />}
          onClick={this.resetGame}
        >
          Play
        </BlueButton>
        <LightBlueButton
          variant={"contained"}
          color={"primary"}
          startIcon={<PauseIcon />}
          onClick={this.pauseGame}
        >
          Pause
        </LightBlueButton>
        <LightGreenButton
          variant={"contained"}
          color={"primary"}
          startIcon={<RotateLeftIcon />}
          onClick={this.resetGame}
        >
          Reset
        </LightGreenButton>
      </ControlsWrapper>
    );
  }
}
