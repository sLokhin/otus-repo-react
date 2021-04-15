import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";

import { checkAuthSaga, loginSaga, logoutSaga } from "./saga";
import { actions, reducer, authDefaultState, payloadType } from "./reducer";
import {
  isLoggedIn,
  getPlayerName,
  executeLogin,
  executeLogout,
} from "../../API/auth";
import { loaderSlice } from "../Loader/reducer";

const testName = "Test Name";

describe("Test auth saga", () => {
  it("check initial login success", () => {
    return expectSaga(checkAuthSaga)
      .withReducer(reducer)
      .put(loaderSlice.actions.loadingStart())
      .provide([
        [matchers.call.fn(isLoggedIn), true],
        [matchers.call.fn(getPlayerName), testName],
      ])
      .put(actions.loginSuccess({ name: testName }))
      .put(loaderSlice.actions.loadingEnd())
      .hasFinalState({
        ...authDefaultState,
        isAuth: true,
        name: testName,
      })
      .run();
  });

  it("check initial login failure", () => {
    return expectSaga(checkAuthSaga)
      .withReducer(reducer)
      .put(loaderSlice.actions.loadingStart())
      .provide([
        [matchers.call.fn(isLoggedIn), false],
        [matchers.call.fn(getPlayerName), ""],
      ])
      .put(actions.logoutSuccess())
      .put(loaderSlice.actions.loadingEnd())
      .hasFinalState({
        ...authDefaultState,
      })
      .run();
  });

  it("check normal login success", () => {
    return expectSaga(loginSaga, {
      payload: { name: testName } as payloadType,
      type: "testLoginSuccess",
    })
      .withReducer(reducer)
      .put(loaderSlice.actions.loadingStart())
      .provide([[matchers.call.fn(executeLogin), testName]])
      .put(actions.loginSuccess({ name: testName }))
      .hasFinalState({
        ...authDefaultState,
        isAuth: true,
        name: testName,
      })
      .run();
  });

  it("check normal login failure", () => {
    return expectSaga(loginSaga, {
      payload: { name: testName } as payloadType,
      type: "testLoginFailure",
    })
      .withReducer(reducer)
      .put(loaderSlice.actions.loadingStart())
      .provide([[matchers.call.fn(executeLogin), Promise.reject()]])
      .put(actions.loginFailure())
      .hasFinalState({
        ...authDefaultState,
        errorLog: ["loginError"],
      })
      .run();
  });

  it("check normal logout success", () => {
    return expectSaga(logoutSaga)
      .withReducer(reducer)
      .put(loaderSlice.actions.loadingStart())
      .provide([[matchers.call.fn(executeLogout), null]])
      .put(actions.logoutSuccess())
      .hasFinalState({
        ...authDefaultState,
      })
      .run();
  });

  it("check normal logout failure", () => {
    return expectSaga(logoutSaga)
      .withReducer(reducer)
      .put(loaderSlice.actions.loadingStart())
      .provide([[matchers.call.fn(executeLogout), Promise.reject()]])
      .put(actions.logoutFailure())
      .hasFinalState({
        ...authDefaultState,
        errorLog: ["logoutError"],
      })
      .run();
  });
});
