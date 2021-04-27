import { buffers } from "redux-saga";
import { actionChannel } from "redux-saga/effects";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";

import {
  checkAuthSaga,
  loginSaga,
  logoutSaga,
  loginAttemptSaga,
  logoutAttemptSaga,
} from "./saga";

import {
  actions,
  reducer,
  authDefaultState,
  payloadType,
  LOGIN_ATTEMPT,
  LOGOUT_ATTEMPT,
} from "./reducer";

import { actions as gameProcessActions } from "@/modules/Game/reducer";

import {
  isLoggedIn,
  getPlayerName,
  executeLogin,
  executeLogout,
} from "@/api/auth";
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
      .put(gameProcessActions.setDefaultOptions())
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

  it("check loginAttempt saga", () => {
    const saga = testSaga(loginAttemptSaga);
    const loginChannel = actionChannel(LOGIN_ATTEMPT, buffers.expanding(10));
    saga
      .next()
      .actionChannel(LOGIN_ATTEMPT)
      .next(loginChannel.type)
      .takeEvery(loginChannel.type, loginSaga)
      .finish();
  });

  it("check logoutAttempt saga", () => {
    const saga = testSaga(logoutAttemptSaga);
    const logoutChannel = actionChannel(LOGOUT_ATTEMPT, buffers.expanding(10));
    saga
      .next()
      .actionChannel(LOGOUT_ATTEMPT)
      .next(logoutChannel.type)
      .takeEvery(logoutChannel.type, logoutSaga)
      .finish();
  });
});
