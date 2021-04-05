import { combineReducers } from "redux";
import { reducer as gameReducer } from "../Components/Game/reducer";
import { reducer as loginReducer } from "../Components/NameForm/reducer";

export const reducer = combineReducers({
  loginState: loginReducer,
  gameState: gameReducer,
});

export type GameOfLifeState = ReturnType<typeof reducer>;
