import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const LOGIN_ATTEMPT = "LOGIN_ATTEMPT";
export const LOGOUT_ATTEMPT = "LOGOUT_ATTEMPT";

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
    loginSuccess: (state, { payload }: PayloadAction<payloadType>) => {
      state.name = payload.name;
      state.isAuth = true;
    },
    loginFailure: (state) => {
      state.name = "";
      state.isAuth = false;
      state.errorLog.push("loginError");
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
