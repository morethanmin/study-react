import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

//const store = createStore(rootreducer);

// function logger(store) {
//   return function wrapDispatchToAddLogging(next) {
//     return function dispatchAndLog(action) {
//       console.log("dispatching", action);
//       let result = next(action);
//       console.log("next state", store.getState());
//       return result;
//     };
//   };
// }
// const loggerDispatch = logger(store)(store.dispatch);
// loggerDispatch(increase());

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
); // 여러개의 미들웨어를 적용 할 수 있습니다.

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
