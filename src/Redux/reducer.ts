import { combineReducers } from "redux";
import { reducer as authReducer } from "../Components/NameForm/reducer";
import { reducer as loadingReducer } from "../Components/Loader/reducer";

export const reducer = combineReducers({
  loadingState: loadingReducer,
  authState: authReducer,
});

export type GameOfLifeState = ReturnType<typeof reducer>;
