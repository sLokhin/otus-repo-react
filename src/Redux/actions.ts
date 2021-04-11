import { Dispatch } from "redux";
import { login, logout } from "../API/auth";

import * as loginTypes from "../Components/NameForm/types";
import * as loadingTypes from "../Components/Loader/types";

import { AuthActionType, payloadType } from "../Components/NameForm/reducer";
import { LoaderActionType } from "../Components/Loader/reducer";

export const actionTypes = {
  ...loginTypes,
  ...loadingTypes,
};

export type Actions = LoaderActionType | AuthActionType;

export const loadingStartAction = (): LoaderActionType => {
  return { type: actionTypes.LOADING_START };
};

export const loadingEndAction = (): LoaderActionType => {
  return { type: actionTypes.LOADING_END };
};

export const loginAction = (payload: payloadType): AuthActionType => {
  return {
    type: actionTypes.LOGIN,
    payload,
  };
};

export const loginFailureAction = (): AuthActionType => {
  return { type: actionTypes.LOGIN_FAILURE };
};

export const logoutAction = (): AuthActionType => {
  return { type: actionTypes.LOGOUT };
};

export const logoutFailureAction = (): AuthActionType => {
  return { type: actionTypes.LOGOUT_FAILURE };
};

export const loginProcess = (name: string) => {
  return async (dispatch: Dispatch<Actions>): Promise<void> => {
    dispatch(loadingStartAction());
    await login(name)
      .then((nameFromPromise) => {
        dispatch(loginAction({ name: nameFromPromise }));
        dispatch(loadingEndAction());
      })
      .catch(() => {
        dispatch(loginFailureAction());
      });
  };
};

export const logoutProcess = () => {
  return async (dispatch: Dispatch<Actions>): Promise<void> => {
    dispatch(loadingStartAction());
    await logout()
      .then(() => {
        dispatch(logoutAction());
        dispatch(loadingEndAction());
      })
      .catch(() => {
        dispatch(logoutFailureAction());
      });
  };
};
