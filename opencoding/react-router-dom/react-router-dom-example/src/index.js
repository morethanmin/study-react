import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//router dom을 사용하기위해 최상위 컴포넌트를 감싸는 wrapper 컴포넌트다.
// BrowserRouter는 일반적인 라우트 제공
// hashrouter는 #처리를해서 브라우저는 인식하지 못하도록 라우트 제공
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  //   <HashRouter>
  //   <App />
  // </HashRouter>,
  document.getElementById("root")
);
