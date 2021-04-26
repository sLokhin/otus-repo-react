import { combineReducers } from "redux";
import { authSlice } from "@/modules/NameForm/reducer";
import { loaderSlice } from "@/modules/Loader/reducer";
import { gameOptionsSlice } from "@/modules/GameOptions/reducer";
import { gameProcessSlice } from "@/modules/Game/reducer";

export const reducer = combineReducers({
  loadingState: loaderSlice.reducer,
  authState: authSlice.reducer,
  gameOptionsState: gameOptionsSlice.reducer,
  gameProcessState: gameProcessSlice.reducer,
});

export type GameOfLifeState = ReturnType<typeof reducer>;
