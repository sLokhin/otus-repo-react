import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import { authSaga } from "../Components/NameForm/saga";
import { reducer } from "./reducer";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(authSaga);
}

export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSaga);
