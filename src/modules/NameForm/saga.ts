import { take, call, put, fork, actionChannel } from "redux-saga/effects";
import { actions, LOGIN_ATTEMPT, LOGOUT_ATTEMPT } from "./reducer";
import { loaderSlice } from "@/modules/Loader/reducer";
import {
  isLoggedIn,
  getPlayerName,
  executeLogin,
  executeLogout,
  saveAppState,
} from "@/api/auth";
import { store } from "@/redux/store";
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
}: ReturnType<typeof actions.loginSuccess>): SagaIterator {
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

export function* loginAttemptSaga(): SagaIterator {
  const loginChannel = yield actionChannel(LOGIN_ATTEMPT);
  while (true) {
    const loginAction = yield take(loginChannel);
    yield call(loginSaga, loginAction);
  }
}

export function* logoutSaga(): SagaIterator {
  yield call(saveAppState, store.getState());
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

export function* logoutAttemptSaga(): SagaIterator {
  const logoutChannel = yield actionChannel(LOGOUT_ATTEMPT);
  while (true) {
    yield take(logoutChannel);
    yield* logoutSaga();
  }
}

export function* authSaga(): SagaIterator {
  yield fork(checkAuthSaga);
  yield fork(loginAttemptSaga);
  yield fork(logoutAttemptSaga);
}
