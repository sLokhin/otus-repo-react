import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomPixelMass } from "./supportFunctions";

export enum possibleState {
  play = "play",
  pause = "pause",
  reset = "reset",
}

export enum possibleSize {
  small = 10,
  medium = 15,
  large = 20,
}

export enum possibleSpeed {
  slow = 2,
  medium = 1,
  fast = 0.5,
}

export const DEFAULT_GAME_STATE = possibleState.pause;
export const DEFAULT_FIELD_SIZE = possibleSize.small;
export const DEFAULT_GAME_SPEED = possibleSpeed.medium;
export const DEFAULT_SLIDER_PERCENT = 20;

interface GameProcessState {
  gameState: possibleState;
  fieldSize: possibleSize;
  gameSpeed: possibleSpeed;
  fillPercent: number;
  pixelMatrix: boolean[][];
}

export const gameOptionsDefaultState: GameProcessState = {
  gameState: DEFAULT_GAME_STATE,
  fieldSize: DEFAULT_FIELD_SIZE,
  gameSpeed: DEFAULT_GAME_SPEED,
  fillPercent: DEFAULT_SLIDER_PERCENT,
  pixelMatrix: getRandomPixelMass(DEFAULT_FIELD_SIZE, DEFAULT_SLIDER_PERCENT),
};

export type payloadStateType = possibleState;
export type payloadSizeType = possibleSize;
export type payloadSpeedType = possibleSpeed;
export type payloadPercentType = number;
export type payloadPixelMatrixType = boolean[][];

export const gameProcessSlice = createSlice({
  name: "gameProcess",
  initialState: gameOptionsDefaultState,
  reducers: {
    setDefaultOptions: (state) => {
      state.gameState = DEFAULT_GAME_STATE;
      state.fieldSize = DEFAULT_FIELD_SIZE;
      state.gameSpeed = DEFAULT_GAME_SPEED;
      state.fillPercent = DEFAULT_SLIDER_PERCENT;
      state.pixelMatrix = getRandomPixelMass(
        DEFAULT_FIELD_SIZE,
        DEFAULT_SLIDER_PERCENT
      );
    },
    setGameState: (state, { payload }: PayloadAction<payloadStateType>) => {
      state.gameState = payload;
    },
    setPixelMatrix: (
      state,
      { payload }: PayloadAction<payloadPixelMatrixType>
    ) => {
      state.pixelMatrix = payload;
    },
    setFieldSize: (state, { payload }: PayloadAction<payloadSizeType>) => {
      state.fieldSize = payload;
    },
    setGameSpeed: (state, { payload }: PayloadAction<payloadSpeedType>) => {
      state.gameSpeed = payload;
    },
    setFillPercent: (state, { payload }: PayloadAction<payloadPercentType>) => {
      state.fillPercent = payload;
    },
  },
});

export const { reducer, actions } = gameProcessSlice;
