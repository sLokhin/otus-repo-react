import React, { FC, useState } from "react";
import styled from "@emotion/styled";

import { GameControls } from "../GameControls/GameControls";
import { GameOptions } from "../GameOptions/GameOptions";
import { FillSlider } from "../FillSlider/FillSlider";
import { PixelField } from "../PixelField/PixelField";

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

enum possibleSize {
  small,
  medium,
  large,
}

enum possibleSpeed {
  slow,
  medium,
  fast,
}

interface GameState {
  pixelStatesMatrix: boolean[][];
  fillPercent: number;
  pause: boolean;
  size: string;
  speed: string;
}

const getInitialPixelMass = (n: number): boolean[][] => {
  return new Array(n).fill(undefined).map(() => new Array(n).fill(false));
};

const getRandomPixelMass = (n: number, percent: number): boolean[][] => {
  const pixelMatrix: boolean[][] = getInitialPixelMass(n);
  let a = Math.round(Math.pow(n, 2) * (percent / 100));
  let b = Math.pow(n, 2);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (Math.random() < a / b) {
        pixelMatrix[i][j] = true;
        a--;
      }
      b--;
    }
  }
  return pixelMatrix;
};

const initialState: GameState = {
  pixelStatesMatrix: getRandomPixelMass(
    DEFAULT_FIELD_SIZE,
    DEFAULT_SLIDER_PERCENT
  ),
  fillPercent: DEFAULT_SLIDER_PERCENT,
  pause: true,
  size: possibleSize[1],
  speed: possibleSpeed[1],
};

export const Game: FC = () => {
  const [state, setState] = useState(initialState);
  const { pixelStatesMatrix, fillPercent } = state;

  const getNewPixelStatesMatrix = (
    coordX: number,
    coordY: number,
    newFlag: boolean,
    currentPixelMatrix: boolean[][]
  ): boolean[][] => {
    return currentPixelMatrix.map((rowMass, xIdx) => {
      if (coordX === xIdx) {
        return rowMass.map((currentPixelState, yIdx) => {
          if (coordY === yIdx) {
            return newFlag === currentPixelState ? currentPixelState : newFlag;
          }
          return currentPixelState;
        });
      }
      return rowMass;
    });
  };

  const onPixelClick = (
    coordX: number,
    coordY: number,
    newFlag: boolean
  ): void => {
    const { pixelStatesMatrix } = state;
    const newPixelStatesMatrix = getNewPixelStatesMatrix(
      coordX,
      coordY,
      newFlag,
      pixelStatesMatrix
    );

    setState({ ...state, pixelStatesMatrix: newPixelStatesMatrix });
  };

  const setFilledPercent = (percent: number): void => {
    const { fillPercent } = state;
    const newPixelStatesMatrix = getRandomPixelMass(
      DEFAULT_FIELD_SIZE,
      percent
    );
    if (percent !== fillPercent) {
      setState({
        ...state,
        pixelStatesMatrix: newPixelStatesMatrix,
        fillPercent: percent,
      });
    }
  };

  const resetFieldAndSlider = (): Pick<
    GameState,
    "fillPercent" | "pixelStatesMatrix"
  > => {
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

  const setOptionsSize = (size: string): void => {
    setState({ ...state, size });
  };

  const setOptionsSpeed = (speed: string): void => {
    setState({ ...state, speed });
  };

  return (
    <Grid>
      <Paper elevation={10}>
        <Grid container direction={"column"} alignItems={"center"}>
          <GameMenuWrapper>
            <GameControls setControlsState={setControlsState}></GameControls>
            <GameOptions
              setOptionsSize={setOptionsSize}
              setOptionsSpeed={setOptionsSpeed}
            ></GameOptions>
            <FillSlider
              currentPercent={fillPercent}
              defaultPercent={DEFAULT_SLIDER_PERCENT}
              setFilledPercent={setFilledPercent}
            ></FillSlider>
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
