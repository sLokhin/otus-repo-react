import { combineReducers } from "redux";
import { authSlice } from "../Components/NameForm/reducer";
import { loaderSlice } from "../Components/Loader/reducer";

export const reducer = combineReducers({
  loadingState: loaderSlice.reducer,
  authState: authSlice.reducer,
});

export type GameOfLifeState = ReturnType<typeof reducer>;
