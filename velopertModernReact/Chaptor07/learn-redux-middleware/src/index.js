import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

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

const customHistory = createBrowserHistory();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      logger
    )
  )
); // 여러개의 미들웨어를 적용 할 수 있습니다.

//browse router, router 차이점?
ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,

  document.getElementById("root")
);
