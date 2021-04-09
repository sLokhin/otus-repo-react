import { Action } from "redux";
import * as actionTypes from "./types";

export interface AuthState {
  name: string;
  isAuth: boolean;
}

export const defaultState: AuthState = {
  name: "",
  isAuth: false,
};

type payloadType = {
  name: string;
};

export function reducer(
  state: AuthState = defaultState,
  action: Action & { payload?: payloadType }
): AuthState {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        name: action.payload?.name || "Some random name",
        isAuth: true,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        name: "",
        isAuth: false,
      };
    case actionTypes.LOGOUT_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
