import React, { FC, createContext, useReducer } from "react";
import { Provider } from "react-redux";
import { Routes } from "../../Routing/Routes";
import * as actionTypes from "../../API/actionTypes";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../Redux/store";

type AppState = {
  name: string;
  isAuth: boolean;
  isLoading: boolean;
};

export const initialState: AppState = {
  name: "",
  isAuth: false,
  isLoading: true,
};

const reducer = (state: AppState, action): AppState => {
  switch (action.type) {
    case actionTypes.LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        name: action.payload.name,
        isAuth: true,
        isLoading: false,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        name: "",
        isAuth: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const AppContext = createContext();
export const App: FC = () => {
  const reducerResult = useReducer(reducer, initialState);
  return (
    <Provider store={store}>
      <AppContext.Provider value={reducerResult}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AppContext.Provider>
    </Provider>
  );
};
