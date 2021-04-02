import { Action } from "redux";
import { getRandomPixelMass } from "../Components/Game/Game";

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

interface GameOfLifeState {
  playerName: string;
  isAuth: boolean;
  isLoading: boolean;
  pixelStatesMatrix: boolean[][];
  fillPercent: number;
  pause: boolean;
  size: string;
  speed: string;
}

const defaultState: GameOfLifeState = {
  playerName: "",
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
  return state;
}
