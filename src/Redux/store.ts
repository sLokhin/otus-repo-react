import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const configureStore = () => {
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
};

export const store = configureStore();
