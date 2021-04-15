import { loadingDefaultState } from "./types";
import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: loadingDefaultState,
  reducers: {
    loadingStart: () => true,
    loadingEnd: () => false,
  },
});
