import { store } from "../Redux/store";
import React from "react";
import * as actionTypes from "../Redux/types";

(window as any).__store = store;

store.subscribe(() => {
  console.log("State", store.getState());
});

store.dispatch({
  type: "SOME_ACTION",
});

store.dispatch({ type: actionTypes.LOGIN });
store.dispatch({ type: actionTypes.LOGOUT });

export class ReduxPage extends React.Component<
  Record<string, unknown>,
  Record<string, unknown>
> {
  render(): React.ReactNode {
    return <h1>Open console to observe</h1>;
  }
}
