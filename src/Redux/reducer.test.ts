import { store } from "./store";
import { actions as loaderActions } from "../Components/Loader/reducer";
import { actions as authActions } from "../Components/NameForm/reducer";
import { authDefaultState } from "../Components/NameForm/reducer";

describe("Redux reducer test", () => {
  it("correct initial login state", () => {
    const initialLoginState = store.getState().authState;
    expect(initialLoginState).toMatchObject(authDefaultState);
  });

  it("does not mutate state", () => {
    const states = [store.getState()];

    let state;
    store.dispatch(authActions.loginSuccess({ name: "New Name" }));
    state = store.getState();
    expect(states.indexOf(state)).toBe(-1);
    states.push(state);

    store.dispatch(authActions.logoutSuccess());
    state = store.getState();
    expect(states.indexOf(state)).toBe(-1);
    states.push(state);

    store.dispatch(authActions.loginFailure());
    state = store.getState();
    expect(states.indexOf(state)).toBe(-1);
    states.push(state);

    store.dispatch(authActions.logoutFailure());
    state = store.getState();
    expect(states.indexOf(state)).toBe(-1);
    states.push(state);
  });

  it("calls subscribers on every change", () => {
    const subscriber1 = jest.fn();
    const subscriber2 = jest.fn();
    store.subscribe(subscriber1);
    store.subscribe(subscriber2);

    store.dispatch(loaderActions.loadingStart());
    store.dispatch(authActions.loginSuccess({ name: "New Name" }));
    expect(subscriber1).toHaveBeenCalledTimes(2);
    expect(subscriber2).toHaveBeenCalledTimes(2);
  });
});
