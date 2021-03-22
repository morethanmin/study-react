import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//router dom을 사용하기위해 최상위 컴포넌트를 감싸는 wrapper 컴포넌트다.
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  //   <HashRouter>
  //   <App />
  // </HashRouter>,
  document.getElementById("root")
);
