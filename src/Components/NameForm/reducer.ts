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

export const authSlice = createSlice({
  name: "auth",
  initialState: authDefaultState,
  reducers: {
    login: (state, {}: PayloadAction<payloadType>) => {
      return state;
    },
    loginSuccess: (state, { payload }: PayloadAction<payloadType>) => {
      console.log("PAYLOAD NAME ", payload, payload.name);
      state.name = payload.name;
      state.isAuth = true;
    },
    loginFailure: (state) => {
      state.name = "";
      state.isAuth = false;
      state.errorLog.push("loginError");
    },
    logout: (state) => {
      return state;
    },
    logoutSuccess: (state) => {
      state.name = "";
      state.isAuth = false;
    },
    logoutFailure: (state) => {
      state.errorLog.push("logoutError");
    },
  },
});

export const { reducer, actions } = authSlice;
