import * as actionTypes from "./types";

enum errorTypes {
  loginError,
  logoutError,
}

type errorLog = Array<keyof typeof errorTypes>;

export interface AuthState {
  name: string;
  isAuth: boolean;
  errorLog: errorLog;
}

export const authDefaultState: AuthState = {
  name: "",
  isAuth: false,
  errorLog: [],
};

type payloadType = {
  name: string;
};

type SuccessLogin = {
  type: typeof actionTypes.LOGIN;
} & {
  payload: payloadType;
};

type SuccessLogout = {
  type: typeof actionTypes.LOGOUT;
};

type FailedLogin = {
  type: typeof actionTypes.LOGIN_FAILURE;
};

type FailedLogout = {
  type: typeof actionTypes.LOGOUT_FAILURE;
};

export type AuthActionType =
  | SuccessLogin
  | SuccessLogout
  | FailedLogin
  | FailedLogout;

export function reducer(
  state: AuthState = authDefaultState,
  action: AuthActionType
): AuthState {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        name: action.payload.name,
        isAuth: true,
      };
    case actionTypes.LOGIN_FAILURE:
      return {
        ...state,
        name: "",
        isAuth: false,
        errorLog: [...state.errorLog, "loginError"],
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
        errorLog: [...state.errorLog, "logoutError"],
      };
    default:
      return state;
  }
}
