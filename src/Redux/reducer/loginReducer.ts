import { Action } from "redux";
import * as actionTypes from "../types";

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

export function loginReducer(
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
