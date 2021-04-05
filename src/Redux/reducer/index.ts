import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { gameReducer } from "./gameReducer";

export const reducer = combineReducers({
  loginState: loginReducer,
  gameState: gameReducer,
});

export type GameOfLifeState = ReturnType<typeof reducer>;
