import { getRandomPixelMass } from "../Components/Game/Game";
import * as actionTypes from "./types";

const DEFAULT_FIELD_SIZE = 10;
const DEFAULT_SLIDER_PERCENT = 20;

interface Action<T = any> {
  type: T;
  payload?: any;
}

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

export interface GameOfLifeState {
  name: string;
  isAuth: boolean;
  isLoading: boolean;
  pixelStatesMatrix: boolean[][];
  fillPercent: number;
  pause: boolean;
  size: string;
  speed: string;
}

const defaultState: GameOfLifeState = {
  name: "",
  isAuth: false,
  isLoading: true,
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
  state: GameOfLifeState = defaultState,
  action: Action
): GameOfLifeState {
  switch (action.type) {
    case actionTypes.LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        name: action.payload.name,
        isAuth: true,
        isLoading: false,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        name: "",
        isAuth: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
