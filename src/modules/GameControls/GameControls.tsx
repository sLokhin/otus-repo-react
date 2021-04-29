import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, withStyles } from "@material-ui/core";
import { lightGreen, lightBlue, blue } from "@material-ui/core/colors";
import { possibleState, actions } from "@/modules/Game/reducer";
import { GameOfLifeState } from "@/redux/reducer";
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
  setDefaultOptions?: () => void;
  setGameState?: (gameState: possibleState) => void;
}

export const GameControls: FC<GameControlsProps> = (
  props: GameControlsProps
) => {
  const gameState = useSelector(
    (state: GameOfLifeState) => state.gameProcessState.gameState
  );
  const dispatch = useDispatch();
  const {
    setDefaultOptions = (): void => {
      dispatch(actions.setDefaultOptions());
    },
    setGameState = (newGameState: possibleState): void => {
      if (gameState !== newGameState) {
        dispatch(actions.setGameState(newGameState));
      }
    },
  } = props;

  return (
    <ControlsWrapper>
      <BlueButton
        classes={buttonPlayClasses}
        variant={"contained"}
        color={"primary"}
        startIcon={<PlayArrowIcon />}
        onClick={() => setGameState(possibleState.play)}
      >
        Play
      </BlueButton>
      <LightBlueButton
        classes={buttonPauseClasses}
        variant={"contained"}
        color={"primary"}
        startIcon={<PauseIcon />}
        onClick={() => setGameState(possibleState.pause)}
      >
        Pause
      </LightBlueButton>
      <LightGreenButton
        classes={buttonResetClasses}
        variant={"contained"}
        color={"primary"}
        startIcon={<RotateLeftIcon />}
        onClick={() => setDefaultOptions()}
      >
        Reset
      </LightGreenButton>
    </ControlsWrapper>
  );
};
