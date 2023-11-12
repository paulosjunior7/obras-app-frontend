import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";

import reducers from "./app";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(createLogger({ collapsed: true })))
);
