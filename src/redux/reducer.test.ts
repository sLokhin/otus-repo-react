import { store } from "./store";
import { actions as loaderActions } from "@/modules/Loader/reducer";
import { actions as authActions } from "@/modules/NameForm/reducer";
import { authDefaultState } from "@/modules/NameForm/reducer";

describe("Redux reducer test", () => {
  it("correct initial login state", () => {
    const initialLoginState = store.getState().authState;
    expect(initialLoginState).toMatchObject(authDefaultState);
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
