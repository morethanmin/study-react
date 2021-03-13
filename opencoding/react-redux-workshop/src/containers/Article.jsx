import Article from "../components/Article";
import { connect } from "react-redux";

export default connect(
  (state) => {
    if (state.mode === "welcome") {
      return {
        mode: state.mode,
        title: state.welcome_content.title,
        desc: state.welcome_content.desc,
      };
    } else if (state.mode === "read") {
      for (const content of state.contents) {
        if (content.id === state.selected_content_id) {
          return {
            mode: state.mode,
            title: content.title,
            desc: content.desc,
          };
        }
      }

      return {};
    }
  },
  (dispatch) => {
    return {
      onClickUpdate: () => {
        dispatch({ type: "UPDATE" });
      },
      onClickDelete: () => {
        dispatch({ type: "DELETE_ARTICLE" });
      },
    };
  }
)(Article);
