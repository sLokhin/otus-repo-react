import faker from "faker";
import { actions, reducer, authDefaultState } from "./reducer";

describe("Name form reducer", () => {
  it("login success", () => {
    const newPlayer = {
      name: `${faker.name.firstName()}`,
    };
    expect(reducer(authDefaultState, actions.loginSuccess(newPlayer))).toEqual({
      ...authDefaultState,
      isAuth: true,
      name: newPlayer.name,
    });
  });

  it("login failure", () => {
    expect(reducer(authDefaultState, actions.loginFailure())).toEqual({
      ...authDefaultState,
      errorLog: ["loginError"],
    });
  });

  it("logout success", () => {
    expect(reducer(authDefaultState, actions.logoutSuccess())).toEqual({
      ...authDefaultState,
    });
  });

  it("logout failure", () => {
    expect(reducer(authDefaultState, actions.logoutFailure())).toEqual({
      ...authDefaultState,
      errorLog: ["logoutError"],
    });
  });
});
