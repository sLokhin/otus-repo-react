import * as actionTypes from "./types";

export type LoaderState = boolean;

export const loadingDefaultState: LoaderState = true;

export type LoaderActionType = { type: keyof typeof actionTypes };

export function reducer(
  state: LoaderState = loadingDefaultState,
  action: LoaderActionType
): LoaderState {
  switch (action.type) {
    case actionTypes.LOADING_START:
      return true;
    case actionTypes.LOADING_END:
      return false;
    case actionTypes.LOGIN:
      return false;
    case actionTypes.LOGIN_FAILURE:
      return false;
    case actionTypes.LOGOUT:
      return false;
    case actionTypes.LOGOUT_FAILURE:
      return false;
    default:
      return state;
  }
}
