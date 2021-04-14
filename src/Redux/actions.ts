import { Dispatch } from "redux";

import { executeLogin, executeLogout } from "../API/auth";

import * as loginTypes from "../Components/NameForm/types";
import * as loadingTypes from "../Components/Loader/types";

import { authSlice } from "../Components/NameForm/reducer";
import { loaderSlice } from "../Components/Loader/reducer";

export const actionTypes = {
  ...loginTypes,
  ...loadingTypes,
};

export const loginProcess = (name: string) => {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    dispatch(loaderSlice.actions.loadingStart());
    await executeLogin(name)
      .then((nameFromPromise) => {
        console.log(
          "ACTIOn   ",
          authSlice.actions.login({ name: nameFromPromise })
        );
        dispatch(authSlice.actions.login({ name: nameFromPromise }));
        dispatch(loaderSlice.actions.loadingEnd());
      })
      .catch(() => {
        dispatch(authSlice.actions.loginFailure());
        dispatch(loaderSlice.actions.loadingEnd());
      });
  };
};

export const logoutProcess = () => {
  return async (dispatch: Dispatch<any>): Promise<void> => {
    dispatch(loaderSlice.actions.loadingStart());
    await executeLogout()
      .then(() => {
        dispatch(authSlice.actions.logout());
        dispatch(loaderSlice.actions.loadingEnd());
      })
      .catch(() => {
        dispatch(authSlice.actions.logoutFailure());
        dispatch(loaderSlice.actions.loadingEnd());
      });
  };
};
