import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum errorTypes {
  loginError,
  logoutError,
}

type errorLog = Array<keyof typeof errorTypes>;

interface AuthState {
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
    loginAttempt: (state, {}: PayloadAction<payloadType>) => {
      return state;
    },
    loginSuccess: (state, { payload }: PayloadAction<payloadType>) => {
      state.name = payload.name;
      state.isAuth = true;
    },
    loginFailure: (state) => {
      state.name = "";
      state.isAuth = false;
      state.errorLog.push("loginError");
    },
    logoutAttempt: (state) => {
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
