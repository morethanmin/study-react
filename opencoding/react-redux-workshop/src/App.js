import "./App.css";
import { connect } from "react-redux";

import Header from "./components/Header";
import NavC from "./containers/Nav";
import ControlC from "./containers/Control";
import ArticleC from "./containers/Article";
import CreateC from "./containers/Create";
import UpdateC from "./containers/Update";

function App(props) {
  return (
    <div className="App">
      {/* 재사용성이 없는 컴포넌트라고 가정 */}
      <Header />
      {/* 재사용성이 높다고 가정 */}
      <NavC />
      <ControlC />
      {props.mode === "read" || props.mode === "welcome" ? <ArticleC /> : null}
      {props.mode === "create" ? <CreateC /> : null}
      {props.mode === "update" ? <UpdateC /> : null}
    </div>
  );
}

export default connect(
  (state) => {
    return {
      mode: state.mode,
    };
  },
  (dispatch) => {
    return {};
  }
)(App);
