import * as actionTypes from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

export type payloadType = {
  name: string;
};

type SuccessLogin = {
  type: typeof actionTypes.LOGIN;
} & {
  payload: payloadType;
};

type OtherTypes = {
  type:
    | typeof actionTypes.LOGOUT
    | typeof actionTypes.LOGIN_FAILURE
    | typeof actionTypes.LOGOUT_FAILURE;
};

export type AuthActionType = SuccessLogin | OtherTypes;

export const authSlice = createSlice({
  name: "auth",
  initialState: authDefaultState,
  reducers: {
    login: (state, { payload }: PayloadAction<payloadType>) => {
      state.name = payload.name;
      state.isAuth = true;
    },
    loginFailure: (state) => {
      state.name = "";
      state.isAuth = false;
      state.errorLog.push("loginError");
    },
    logout: (state) => {
      state.name = "";
      state.isAuth = false;
    },
    logoutFailure: (state) => {
      state.errorLog.push("logoutError");
    },
  },
});

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
