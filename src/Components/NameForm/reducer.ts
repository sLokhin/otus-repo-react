import { Action, Dispatch } from "redux";
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

type payloadType = {
  name: string;
};

export const loginProcess = (name: string) => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({ type: actionTypes.LOADING_START });
    await login(name)
      .then((nameFromPromise) => {
        dispatch({
          type: actionTypes.LOGIN,
          payload: { name: nameFromPromise },
        });
      })
      .catch(() => {
        dispatch({ type: actionTypes.LOGIN_FAILURE });
      });
  };
};

export const logoutProcess = () => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch({ type: actionTypes.LOADING_START });
    await logout()
      .then(() => {
        dispatch({ type: actionTypes.LOGOUT });
      })
      .catch(() => {
        dispatch({ type: actionTypes.LOGOUT_FAILURE });
      });
  };
};

export function reducer(
  state: LoginState = defaultState,
  action: Action & { payload?: payloadType }
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
        name: action.payload?.name || "Some random name",
        isAuth: true,
        isLoading: false,
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
        isLoading: false,
      };
    case actionTypes.LOGOUT_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
