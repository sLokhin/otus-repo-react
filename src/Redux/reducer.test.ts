import { configureStore } from "./store";
import {
  login,
  logout,
  loadingStart,
  loadingEnd,
  loginFailure,
  logoutFailure,
  loginProcess,
  logoutProcess,
  actionTypes,
} from "../Redux/actions";
import { authDefaultState } from "../Components/NameForm/reducer";

const testName = "NewTestPlayer";

jest.mock("../API/auth", () => ({
  ...(jest.requireActual("../API/auth") as any),
  executeLogin: jest
    .fn()
    .mockRejectedValueOnce(null)
    .mockResolvedValueOnce(testName),
  executeLogout: jest
    .fn()
    .mockRejectedValueOnce(null)
    .mockResolvedValueOnce(testName),
}));

describe("Redux reducer test", () => {
  it("correct initial login state", () => {
    const store = configureStore();
    const initialLoginState = store.getState().authState;
    expect(initialLoginState).toMatchObject(authDefaultState);
  });

  it("does not mutate state", () => {
    const store = configureStore();
    const states = [store.getState()];

    let state;
    store.dispatch(login({ name: "New Name" }));
    state = store.getState();
    expect(states.indexOf(state)).toBe(-1);
    states.push(state);

    store.dispatch(logout());
    state = store.getState();
    expect(states.indexOf(state)).toBe(-1);
    states.push(state);

    store.dispatch(loginFailure());
    state = store.getState();
    expect(states.indexOf(state)).toBe(-1);
    states.push(state);

    store.dispatch(logoutFailure());
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

    store.dispatch(loadingStart());
    store.dispatch(login({ name: "New Name" }));
    expect(subscriber1).toHaveBeenCalledTimes(2);
    expect(subscriber2).toHaveBeenCalledTimes(2);
  });

  it("test loginProcess failure", async () => {
    const dispatch = jest.fn();
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
