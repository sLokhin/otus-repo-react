import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum possibleSize {
  small = 10,
  medium = 15,
  large = 20,
}

export enum possibleSpeed {
  slow = 0.5,
  medium = 1,
  fast = 2,
}

export const DEFAULT_FIELD_SIZE = possibleSize.small;
export const DEFAULT_GAME_SPEED = possibleSpeed.medium;
export const DEFAULT_SLIDER_PERCENT = 20;

interface GameOptionsState {
  fieldSize: possibleSize;
  gameSpeed: possibleSpeed;
  fillPercent: number;
}

export const gameOptionsDefaultState: GameOptionsState = {
  fieldSize: DEFAULT_FIELD_SIZE,
  gameSpeed: DEFAULT_GAME_SPEED,
  fillPercent: DEFAULT_SLIDER_PERCENT,
};

export type payloadSizeType = possibleSize;
export type payloadSpeedType = possibleSpeed;
export type payloadPercentType = number;

export const gameOptionsSlice = createSlice({
  name: "gameOptions",
  initialState: gameOptionsDefaultState,
  reducers: {
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

export const { reducer, actions } = gameOptionsSlice;
