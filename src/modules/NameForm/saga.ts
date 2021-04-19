import { takeEvery, call, put, fork } from "redux-saga/effects";
import { actions } from "./reducer";
import { loaderSlice } from "../Loader/reducer";
import {
  isLoggedIn,
  getPlayerName,
  executeLogin,
  executeLogout,
} from "@/api/auth";
import { SagaIterator } from "@redux-saga/types";

export function* checkAuthSaga(): SagaIterator {
  yield put(loaderSlice.actions.loadingStart());
  const isLogged: boolean = yield call(isLoggedIn);
  const name: string = yield call(getPlayerName);
  if (isLogged) {
    yield put(actions.loginSuccess({ name }));
  } else {
    yield put(actions.logoutSuccess());
  }
  yield put(loaderSlice.actions.loadingEnd());
}

export function* loginSaga({
  payload,
}: ReturnType<typeof actions.login>): SagaIterator {
  yield put(loaderSlice.actions.loadingStart());
  const name = String(payload.name);
  try {
    yield call(executeLogin, name);
    yield put(actions.loginSuccess({ name }));
    yield put(loaderSlice.actions.loadingEnd());
  } catch {
    yield put(actions.loginFailure());
    yield put(loaderSlice.actions.loadingEnd());
  }
}

export function* logoutSaga(): SagaIterator {
  yield put(loaderSlice.actions.loadingStart());
  try {
    yield call(executeLogout);
    yield put(actions.logoutSuccess());
    yield put(loaderSlice.actions.loadingEnd());
  } catch {
    yield put(actions.logoutFailure());
    yield put(loaderSlice.actions.loadingEnd());
  }
}

export function* authSaga(): SagaIterator {
  yield fork(checkAuthSaga);
  yield takeEvery(actions.login.type, loginSaga);
  yield takeEvery(actions.logout.type, logoutSaga);
}
