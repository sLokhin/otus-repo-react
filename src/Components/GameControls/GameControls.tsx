import React from "react";
import { Button } from "@material-ui/core";
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

const buttonStyle = {
  margin: "0px 10px 0px 10px",
};

interface IGameControlsProps {
  changeGameState: () => void;
}

interface IGameControlsState {
  pause: boolean;
}

export class GameControls extends React.Component<
  IGameControlsProps,
  IGameControlsState
> {
  static defaultProps: IGameControlsProps = {
    changeGameState: (): void => {
      console.log("Game state changed");
    },
  };

  state = {
    pause: true,
  } as IGameControlsState;

  startGame = (): void => {
    this.setState({
      pause: false,
    });
  };

  pauseGame = (): void => {
    this.setState({
      pause: true,
    });
  };

  resetGame = (): void => {
    this.setState({
      pause: true,
    });
  };

  render(): React.ReactNode {
    return (
      <ControlsWrapper>
        <Button
          variant={"contained"}
          color={"primary"}
          startIcon={<PlayArrowIcon />}
          style={buttonStyle}
          onClick={this.resetGame}
        >
          Play
        </Button>
        <Button
          variant={"contained"}
          color={"primary"}
          startIcon={<PauseIcon />}
          style={buttonStyle}
          onClick={this.pauseGame}
        >
          Pause
        </Button>
        <Button
          variant={"contained"}
          color={"primary"}
          startIcon={<RotateLeftIcon />}
          style={buttonStyle}
          onClick={this.resetGame}
        >
          Reset
        </Button>
      </ControlsWrapper>
    );
  }
}
