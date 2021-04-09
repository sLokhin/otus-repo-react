import { Dispatch } from "redux";
import { login, logout } from "../API/auth";

import * as loginTypes from "../Components/NameForm/types";
import * as loadingTypes from "../Components/Loader/types";

export const actionTypes = {
  ...loginTypes,
  ...loadingTypes,
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
        dispatch({ type: actionTypes.LOADING_END });
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
        dispatch({ type: actionTypes.LOADING_END });
      })
      .catch(() => {
        dispatch({ type: actionTypes.LOGOUT_FAILURE });
      });
  };
};
