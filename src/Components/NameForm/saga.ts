import { isEmpty } from "ramda";
import { takeEvery, call, put, fork } from "redux-saga/effects";
import { actions } from "./reducer";
import { loaderSlice } from "../Loader/reducer";

import {
  isLoggedIn,
  getPlayerName,
  executeLogin,
  executeLogout,
} from "../../API/auth";

export function* checkAuthSaga() {
  yield put(loaderSlice.actions.loadingStart());
  const isLogged: boolean = yield call(isLoggedIn);
  const name: string = yield call(getPlayerName);
  console.log("BRANCH 1 ", isLogged, name);
  if (isLogged) {
    console.log("BRANCH 1 - 1", isLogged, name);
    yield put(actions.loginSuccess({ name }));
  } else {
    console.log("BRANCH 1 - 2", isLogged, name);
    yield put(actions.logoutSuccess());
  }
  console.log("BRANCH 1 - 3", isLogged, name);
  yield put(loaderSlice.actions.loadingEnd());
}

export function* loginSaga({ payload }: ReturnType<typeof actions.login>) {
  console.log("BRANCH 2 ");
  yield put(loaderSlice.actions.loadingStart());
  const name = String(payload.name);
  console.log("BRANCH 2 - 1", name);
  try {
    if (!isEmpty(name)) {
      yield call(executeLogin, name);
      yield put(actions.loginSuccess({ name }));
      yield put(loaderSlice.actions.loadingEnd());
    }
  } catch {
    yield put(actions.loginFailure());
    yield put(loaderSlice.actions.loadingEnd());
  }
}

export function* logoutSaga() {
  console.log("BRANCH 3 ");
  yield put(loaderSlice.actions.loadingStart());
  try {
    console.log("BRANCH 3 - 1");
    yield call(executeLogout);
    yield put(actions.logoutSuccess());
    yield put(loaderSlice.actions.loadingEnd());
  } catch {
    console.log("BRANCH 3 - 2");
    yield put(actions.logoutFailure());
    yield put(loaderSlice.actions.loadingEnd());
  }
}

export function* authSaga() {
  console.log("BRANCH 4 ");
  yield fork(checkAuthSaga);
  console.log("BRANCH 4-1 ");
  yield takeEvery(actions.login.type, loginSaga);
  yield takeEvery(actions.logout.type, logoutSaga);
}
