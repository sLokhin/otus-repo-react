import { getRandomPixelMass } from "./Game";
import { Action } from "redux";
import * as actionTypes from "./types";

const DEFAULT_FIELD_SIZE = 10;
const DEFAULT_SLIDER_PERCENT = 20;

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

export interface GameState {
  pixelStatesMatrix: boolean[][];
  fillPercent: number;
  pause: boolean;
  size: string;
  speed: string;
}

export const defaultState: GameState = {
  pixelStatesMatrix: getRandomPixelMass(
    DEFAULT_FIELD_SIZE,
    DEFAULT_SLIDER_PERCENT
  ),
  fillPercent: DEFAULT_SLIDER_PERCENT,
  pause: true,
  size: possibleSize[1],
  speed: possibleSpeed[1],
};

export function reducer(
  state: GameState = defaultState,
  action: Action & { payload?: any }
): GameState {
  switch (action.type) {
    case actionTypes.TEST_ACTION:
      return {
        ...state,
      };
    default:
      return state;
  }
}
