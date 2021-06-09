import { combineReducers } from "redux";
import counterThunk from "./counter-thunk";
import counter, { counterSaga } from "./counter-saga";
import posts, { postsSaga } from "./posts-saga";

import { all } from "redux-saga/effects";

const rootreducer = combineReducers({ counter, posts });
export function* rootSaga() {
  yield all([counterSaga(), postsSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootreducer;
