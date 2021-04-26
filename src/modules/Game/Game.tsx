import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./reducer";
import { GameOfLifeState } from "@/redux/reducer";
import { getNewPixelMatrix, getRandomPixelMass } from "./supportFunctions";

import styled from "@emotion/styled";

import { PixelField } from "@/components/PixelField/PixelField";
import { GameControls } from "@/components/GameControls/GameControls";
import { GameOptions } from "@/modules/GameOptions/GameOptions";

import { Grid, Paper } from "@material-ui/core";

const GameMenuWrapper = styled.div`
  position: relative;
  left: 0px;
  right: 0px;
  display: flex;
  flex-direction: column;
  width: 460px;
  padding: 20px;
  margin: 0px auto;
  justify-content: space-around;
  align-items: center;
`;

export const DEFAULT_FIELD_SIZE = 10;
export const DEFAULT_SLIDER_PERCENT = 20;

interface GameState {
  pause: boolean;
}

export const initialState: GameState = {
  pause: true,
};

export const Game: FC = () => {
  const pixelStatesMatrix = useSelector(
    (state: GameOfLifeState) => state.gameProcessState.pixelMatrix
  );
  const dispatch = useDispatch();

  const [state, setState] = useState(initialState);

  const onPixelClick = (
    coordX: number,
    coordY: number,
    newFlag: boolean
  ): void => {
    const newPixelStatesMatrix = getNewPixelMatrix(
      coordX,
      coordY,
      newFlag,
      pixelStatesMatrix
    );

    dispatch(actions.setPixelMatrix(newPixelStatesMatrix));
  };

  const resetFieldAndSlider = (): any => {
    return {
      fillPercent: DEFAULT_SLIDER_PERCENT,
      pixelStatesMatrix: getRandomPixelMass(
        DEFAULT_FIELD_SIZE,
        DEFAULT_SLIDER_PERCENT
      ),
    };
  };

  const setControlsState = (options: {
    pause: boolean;
    reset: boolean;
  }): void => {
    const { pause, reset } = options;
    let fieldsFromReset = {};
    if (reset) {
      fieldsFromReset = resetFieldAndSlider();
    }

    const newState = {
      ...state,
      pause,
      ...fieldsFromReset,
    };
    setState(newState);
  };

  return (
    <Grid>
      <Paper elevation={10}>
        <Grid container direction={"column"} alignItems={"center"}>
          <GameMenuWrapper>
            <GameControls setControlsState={setControlsState}></GameControls>
            <GameOptions />
          </GameMenuWrapper>
          <PixelField
            pixelStatesMatrix={pixelStatesMatrix}
            onPixelClick={onPixelClick}
          />
        </Grid>
      </Paper>
    </Grid>
  );
};
