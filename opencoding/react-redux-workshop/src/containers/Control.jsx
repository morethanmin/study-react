import Control from "../components/Control";
import { connect } from "react-redux";

export default connect(
  (state) => {
    return {};
  },
  (dispatch) => {
    return {
      onClickCreate: () => {
        dispatch({ type: "CREATE" });
      },
    };
  }
)(Control);
