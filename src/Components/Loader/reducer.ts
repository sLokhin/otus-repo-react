import { createSlice } from "@reduxjs/toolkit";

export type LoaderState = boolean;

export const loadingDefaultState: LoaderState = true;

export const loaderSlice = createSlice({
  name: "loader",
  initialState: loadingDefaultState,
  reducers: {
    loadingStart: () => true,
    loadingEnd: () => false,
  },
});
