import { configureStore } from "./store";
import { loginProcess, logoutProcess, actionTypes } from "../Redux/actions";
import { defaultState as defaultLoginState } from "../Components/NameForm/reducer";

jest.mock("../API/auth", () => ({
  ...(jest.requireActual("../API/auth") as any),
  login: jest
    .fn()
    .mockImplementationOnce(() => {
      return Promise.reject();
    })
    .mockImplementation((name) => {
      return Promise.resolve(name);
    }),
  logout: jest
    .fn()
    .mockImplementationOnce(() => {
      return Promise.reject();
    })
    .mockImplementation(() => {
      return Promise.resolve();
    }),
}));

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
      type: actionTypes.LOADING_START,
    });
    state = store.getState();
    expect(states.indexOf(state)).toBe(-1);
    states.push(state);

    store.dispatch({
      type: actionTypes.LOGIN,
      payload: { name: "New Name" },
    });
    state = store.getState();
    expect(states.indexOf(state)).toBe(-1);
    states.push(state);

    store.dispatch({
      type: actionTypes.LOADING_END,
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
      type: actionTypes.LOADING_START,
    });
    store.dispatch({
      type: actionTypes.LOGIN,
      payload: { name: "New Name" },
    });
    expect(subscriber1).toHaveBeenCalledTimes(2);
    expect(subscriber2).toHaveBeenCalledTimes(2);
  });

  it("test loginProcess failure", async () => {
    const dispatch = jest.fn();
    const testName = "NewPlayerFaulure";
    const thunk = loginProcess(testName);
    await thunk(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOADING_START,
    });
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: actionTypes.LOGIN_FAILURE,
    });
  });

  it("test loginProcess success", async () => {
    const dispatch = jest.fn();
    const testName = "NewPlayerSuccess";
    const thunk = loginProcess(testName);
    await thunk(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOADING_START,
    });
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: actionTypes.LOGIN,
      payload: {
        name: testName,
      },
    });
  });

  it("test logoutProcess failure", async () => {
    const dispatch = jest.fn();
    const thunk = logoutProcess();
    await thunk(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOADING_START,
    });
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: actionTypes.LOGOUT_FAILURE,
    });
  });

  it("test logoutProcess success", async () => {
    const dispatch = jest.fn();
    const thunk = logoutProcess();
    await thunk(dispatch);
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOADING_START,
    });
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: actionTypes.LOGOUT,
    });
  });
});
