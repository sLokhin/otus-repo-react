import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ControlButton } from "@/components/ControlButton/ControlButton";
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
      <ControlButton
        style={"blue"}
        startIcon={<PlayArrowIcon />}
        text={"Play"}
        onClick={() => setGameState(possibleState.play)}
      />
      <ControlButton
        style={"blue"}
        startIcon={<PauseIcon />}
        text={"Pause"}
        onClick={() => setGameState(possibleState.pause)}
      />
      <ControlButton
        style={"blue"}
        startIcon={<RotateLeftIcon />}
        text={"Reset"}
        onClick={() => setDefaultOptions()}
      />
    </ControlsWrapper>
  );
};
