import { combineReducers } from "redux";
import { reducer as loginReducer } from "../Components/NameForm/reducer";
import { reducer as loadingReducer } from "../Components/Loader/reducer";

export const reducer = combineReducers({
  loadingState: loadingReducer,
  authState: loginReducer,
});

export type GameOfLifeState = ReturnType<typeof reducer>;
