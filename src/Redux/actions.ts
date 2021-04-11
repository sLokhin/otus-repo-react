import { Dispatch } from "redux";
import { executeLogin, executeLogout } from "../API/auth";

import * as loginTypes from "../Components/NameForm/types";
import * as loadingTypes from "../Components/Loader/types";

import { AuthActionType, payloadType } from "../Components/NameForm/reducer";
import { LoaderActionType } from "../Components/Loader/reducer";

export const actionTypes = {
  ...loginTypes,
  ...loadingTypes,
};

export type Actions = LoaderActionType | AuthActionType;

export const loadingStart = (): LoaderActionType => {
  return { type: actionTypes.LOADING_START };
};

export const loadingEnd = (): LoaderActionType => {
  return { type: actionTypes.LOADING_END };
};

export const login = (payload: payloadType): AuthActionType => {
  return {
    type: actionTypes.LOGIN,
    payload,
  };
};

export const loginFailure = (): AuthActionType => {
  return { type: actionTypes.LOGIN_FAILURE };
};

export const logout = (): AuthActionType => {
  return { type: actionTypes.LOGOUT };
};

export const logoutFailure = (): AuthActionType => {
  return { type: actionTypes.LOGOUT_FAILURE };
};

export const loginProcess = (name: string) => {
  return async (dispatch: Dispatch<Actions>): Promise<void> => {
    dispatch(loadingStart());
    await executeLogin(name)
      .then((nameFromPromise) => {
        dispatch(login({ name: nameFromPromise }));
        dispatch(loadingEnd());
      })
      .catch(() => {
        dispatch(loginFailure());
        dispatch(loadingEnd());
      });
  };
};

export const logoutProcess = () => {
  return async (dispatch: Dispatch<Actions>): Promise<void> => {
    dispatch(loadingStart());
    await executeLogout()
      .then(() => {
        dispatch(logout());
        dispatch(loadingEnd());
      })
      .catch(() => {
        dispatch(logoutFailure());
        dispatch(loadingEnd());
      });
  };
};
