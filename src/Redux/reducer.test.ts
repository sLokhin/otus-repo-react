import { configureStore } from "./store";
import { loginProcess, logoutProcess } from "../Components/NameForm/reducer";
import * as loginTypes from "../Components/NameForm/types";
import * as gameTypes from "../Components/Game/types";
import { defaultState as defaultLoginState } from "../Components/NameForm/reducer";

describe("Redux reducer test", () => {
  it("correct initial login state", () => {
    const store = configureStore();
    const initialLoginState = store.getState().loginState;
    expect(initialLoginState).toMatchObject(defaultLoginState);
  });

  it("does not mutate state", () => {
    const store = configureStore();
    const states = [store.getState()];

    let state;
    store.dispatch({
      type: loginTypes.LOADING_START,
    });
    state = store.getState();
    expect(states.indexOf(state)).toBe(-1);
    states.push(state);

    store.dispatch({
      type: loginTypes.LOGIN,
      payload: { name: "New Name" },
    });
    state = store.getState();
    expect(states.indexOf(state)).toBe(-1);
    states.push(state);

    store.dispatch({
      type: loginTypes.LOADING_END,
    });
    state = store.getState();
    expect(states.indexOf(state)).toBe(-1);
    states.push(state);
  });

  it("calls subscribers on every change", () => {
    const store = configureStore();

    const subscriber1 = jest.fn();
    const subscriber2 = jest.fn();
    store.subscribe(subscriber1);
    store.subscribe(subscriber2);

    store.dispatch({
      type: loginTypes.LOADING_START,
    });
    store.dispatch({
      type: loginTypes.LOGIN,
      payload: { name: "New Name" },
    });
    expect(subscriber1).toHaveBeenCalledTimes(2);
    expect(subscriber2).toHaveBeenCalledTimes(2);
  });

  it("test loginProcess", async () => {
    const dispatch = jest.fn();
    const testName = "NewPlayer1";
    const thunk = loginProcess(testName);
    await thunk(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: loginTypes.LOADING_START,
    });
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: loginTypes.LOGIN,
      payload: {
        name: testName,
      },
    });
  });

  it("test logoutProcess", async () => {
    const dispatch = jest.fn();
    const thunk = logoutProcess();
    await thunk(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: loginTypes.LOADING_START,
    });
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: loginTypes.LOGOUT,
    });
  });
});
