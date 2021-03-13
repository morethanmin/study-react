import { createStore } from "../../with-reactRedux/node_modules/redux";

export default createStore(function (state, action) {
  //state를 반환하는 reducer function

  //최초의 실행상태
  if (state === undefined) {
    return { number: 0 };
  }

  if (action.type === "INCREMENT") {
    //state 를 복제하고, number값만 다시 넣어서 반환하는 코드
    return { ...state, number: state.number + action.size };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
