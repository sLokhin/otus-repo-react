import * as actionTypes from "./types";
import { createSlice } from "@reduxjs/toolkit";

export type LoaderState = boolean;

export type LoaderActionType = { type: keyof typeof actionTypes };

export const loadingDefaultState: LoaderState = true;

export const loaderSlice = createSlice({
  name: "loader",
  initialState: loadingDefaultState,
  reducers: {
    loadingStart: () => true,
    loadingEnd: () => false,
  },
});

export function reducer(
  state: LoaderState = loadingDefaultState,
  action: LoaderActionType
): LoaderState {
  switch (action.type) {
    case actionTypes.LOADING_START:
      return true;
    case actionTypes.LOADING_END:
    case actionTypes.LOGIN:
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.LOGOUT:
    case actionTypes.LOGOUT_FAILURE:
      return false;
    default:
      return state;
  }
}
