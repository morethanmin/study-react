import Control from "../components/Create";
import { connect } from "react-redux";

export default connect(
  (state) => {
    return {};
  },
  (dispatch) => {
    return {
      CreateArticle: (title, desc) => {
        dispatch({ type: "CREATE_ARTICLE", title: title, desc: desc });
      },
    };
  }
)(Control);
