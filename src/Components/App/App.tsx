import React, { FC, createContext, useReducer } from "react";
import { Routes } from "../../Routing/Routes";

type AppState = {
  name: string;
  isAuth: boolean;
  isLoading: boolean;
};

const initialState: AppState = {
  name: "",
  isAuth: false,
  isLoading: true,
};

const reducer = (state: AppState, action): AppState => {
  switch (action.type) {
    case "LOADING_START":
      return {
        ...state,
        isLoading: true,
      };
    case "LOADING_END":
      return {
        ...state,
        isLoading: false,
      };
    case "LOGIN":
      return {
        ...state,
        name: action.name,
        isAuth: true,
      };
    case "LOGOUT":
      return {
        ...state,
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
  return (
    <AppContext.Provider value={reducerResult}>
      <Routes />
    </AppContext.Provider>
  );
};
