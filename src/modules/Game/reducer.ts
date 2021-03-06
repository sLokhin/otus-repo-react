import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomPixelMass } from "./supportFunctions";

export enum possibleState {
  play = "play",
  pause = "pause",
  finish = "finish",
}

export enum possibleSize {
  small = 15,
  medium = 25,
  large = 35,
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
export const HISTORY_BUFFER = 10;

interface GameProcessState {
  gameState: possibleState;
  fieldSize: possibleSize;
  gameSpeed: possibleSpeed;
  fillPercent: number;
  pixelMatrix: boolean[][];
  genCounter: number;
  genHistory: string[];
}

export const gameOptionsDefaultState: GameProcessState = {
  gameState: DEFAULT_GAME_STATE,
  fieldSize: DEFAULT_FIELD_SIZE,
  gameSpeed: DEFAULT_GAME_SPEED,
  fillPercent: DEFAULT_SLIDER_PERCENT,
  pixelMatrix: getRandomPixelMass(DEFAULT_FIELD_SIZE, DEFAULT_SLIDER_PERCENT),
  genCounter: 0,
  genHistory: [],
};

export type payloadStateType = possibleState;
export type payloadSizeType = possibleSize;
export type payloadSpeedType = possibleSpeed;
export type payloadPercentType = number;
export type payloadPixelMatrixType = boolean[][];
export type payloadHistoryGenType = string;

export const gameProcessSlice = createSlice({
  name: "gameProcess",
  initialState: gameOptionsDefaultState,
  reducers: {
    setDefaultOptions: () => {
      const defaultState = { ...gameOptionsDefaultState };
      defaultState.pixelMatrix = getRandomPixelMass(
        DEFAULT_FIELD_SIZE,
        DEFAULT_SLIDER_PERCENT
      );
      return defaultState;
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
    incrementGenCounter: (state) => {
      state.genCounter = state.genCounter + 1;
    },
    pushGenToHistory: (
      state,
      { payload }: PayloadAction<payloadHistoryGenType>
    ) => {
      state.genHistory = [
        ...state.genHistory.slice(-(HISTORY_BUFFER - 1)),
        payload,
      ];
    },
  },
});

export const { reducer, actions } = gameProcessSlice;
