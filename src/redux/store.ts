import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import { authSaga } from "@/modules/NameForm/saga";
import { gameSaga } from "@/modules/Game/saga";
import { reducer } from "./reducer";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(authSaga);
  yield fork(gameSaga);
}

export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSaga);
