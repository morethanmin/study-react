import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer); // 스토어를 만듭니다.
console.log(store.getState()); // 스토어의 상태를 확인해봅시다.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
