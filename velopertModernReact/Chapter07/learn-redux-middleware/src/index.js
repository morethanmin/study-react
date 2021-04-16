import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import rootReducer from "./modules";
import myLogger from "./middlewares/myLogger";
import * as redux from "react-redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
); // 여러개의 미들웨어를 적용 할 수 있습니다.
ReactDOM.render(
  <redux.Provider store={store}>
    <App />
  </redux.Provider>,
  document.getElementById("root")
);
