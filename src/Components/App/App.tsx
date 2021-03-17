import React, { FC, createContext, useReducer } from "react";

import { GamePage } from "../../Pages/GamePage";
import { LoginPage } from "../../Pages/LoginPage";

type AppState = {
  name: string;
  isAuth: boolean;
};

const initialState: AppState = {
  name: "",
  isAuth: false,
};

const reducer = (state: AppState, action): AppState => {
  switch (action.type) {
    case "LOGIN":
      return {
        name: action.name,
        isAuth: true,
      };
    case "LOGOUT":
      return {
        name: "",
        isAuth: false,
      };
    default:
      return state;
  }
};

export const AppContext = createContext();
export const App: FC = () => {
  const reducerResult = useReducer(reducer, initialState);
  const [state, dispatch] = reducerResult;
  const { isAuth } = state;
  return (
    <AppContext.Provider value={reducerResult}>
      {isAuth ? <GamePage /> : <LoginPage />}
    </AppContext.Provider>
  );
};
