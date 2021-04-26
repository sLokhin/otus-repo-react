import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandomPixelMass } from "./supportFunctions";
import {
  DEFAULT_FIELD_SIZE,
  DEFAULT_SLIDER_PERCENT,
} from "@/modules/GameOptions/reducer";

interface GameProcessState {
  pixelMatrix: boolean[][];
}

export const gameOptionsDefaultState: GameProcessState = {
  pixelMatrix: getRandomPixelMass(DEFAULT_FIELD_SIZE, DEFAULT_SLIDER_PERCENT),
};

export type payloadPixelMatrixType = boolean[][];

export const gameProcessSlice = createSlice({
  name: "gameProcess",
  initialState: gameOptionsDefaultState,
  reducers: {
    setPixelMatrix: (
      state,
      { payload }: PayloadAction<payloadPixelMatrixType>
    ) => {
      state.pixelMatrix = payload;
    },
  },
});

export const { reducer, actions } = gameProcessSlice;
