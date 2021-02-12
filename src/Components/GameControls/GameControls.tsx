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

interface IGameControlsProps {
  setControlsState: (options: { pause: boolean }) => void;
}

interface IGameControlsState {
  pause: boolean;
}

export class GameControls extends React.Component<
  IGameControlsProps,
  IGameControlsState
> {
  static defaultProps: IGameControlsProps = {
    setControlsState: (options): void => {
      console.log("setControlsState", `pause - ${options.pause}`);
    },
  };
  state = {
    pause: true,
  } as IGameControlsState;

  startGame = (): void => {
    const options = {
      pause: false,
    };
    this.setState(options);
    this.props.setControlsState(options);
    console.log("startGame");
  };

  pauseGame = (): void => {
    const options = {
      pause: true,
    };
    this.setState(options);
    this.props.setControlsState(options);
    console.log("pauseGame");
  };

  resetGame = (): void => {
    const options = {
      pause: true,
    };
    this.setState(options);
    this.props.setControlsState(options);
    console.log("resetGame");
  };

  render(): React.ReactNode {
    return (
      <ControlsWrapper>
        <BlueButton
          classes={{ root: "control-button-play" }}
          variant={"contained"}
          color={"primary"}
          startIcon={<PlayArrowIcon />}
          onClick={this.startGame}
        >
          Play
        </BlueButton>
        <LightBlueButton
          classes={{ root: "control-button-pause" }}
          variant={"contained"}
          color={"primary"}
          startIcon={<PauseIcon />}
          onClick={this.pauseGame}
        >
          Pause
        </LightBlueButton>
        <LightGreenButton
          classes={{ root: "control-button-reset" }}
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
