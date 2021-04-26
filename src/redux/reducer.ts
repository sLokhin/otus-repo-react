import { combineReducers } from "redux";
import { authSlice } from "@/modules/NameForm/reducer";
import { loaderSlice } from "@/modules/Loader/reducer";
import { gameProcessSlice } from "@/modules/Game/reducer";

export const reducer = combineReducers({
  loadingState: loaderSlice.reducer,
  authState: authSlice.reducer,
  gameProcessState: gameProcessSlice.reducer,
});

export type GameOfLifeState = ReturnType<typeof reducer>;
