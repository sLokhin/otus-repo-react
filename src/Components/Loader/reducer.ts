import { Action } from "redux";
import * as actionTypes from "./types";

export interface LoaderState {
  isLoading: boolean;
}

export const defaultState: LoaderState = {
  isLoading: true,
};

export function reducer(
  state: LoaderState = defaultState,
  action: Action
): LoaderState {
  switch (action.type) {
    case actionTypes.LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
