import { authDefaultState, payloadType } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
