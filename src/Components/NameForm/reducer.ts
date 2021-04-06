import { Action } from "redux";
import * as actionTypes from "./types";
import { login, logout } from "../../API/auth";

export interface LoginState {
  name: string;
  isAuth: boolean;
  isLoading: boolean;
}

export const defaultState: LoginState = {
  name: "",
  isAuth: false,
  isLoading: true,
};

export const loginProcess = (name: string) => {
  return async (dispatch: any): Promise<void> => {
    dispatch({ type: actionTypes.LOADING_START });
    await login(name);
    dispatch({ type: actionTypes.LOGIN, payload: { name } });
  };
};

export const logoutProcess = () => {
  return async (dispatch: any): Promise<void> => {
    dispatch({ type: actionTypes.LOADING_START });
    await logout();
    dispatch({ type: actionTypes.LOGOUT });
  };
};

export function reducer(
  state: LoginState = defaultState,
  action: Action & { payload?: any }
): LoginState {
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
}
