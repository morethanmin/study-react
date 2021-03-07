import Update from "../components/Update";
import { connect } from "react-redux";

export default connect(
  (state) => {
    for (const content of state.contents) {
      if (content.id === state.selected_content_id) {
        return {
          title: content.title,
          desc: content.desc,
        };
      }
    }
    return {};
  },
  (dispatch) => {
    return {
      UpdateArticle: (title, desc) => {
        dispatch({ type: "UPDATE_ARTICLE", title: title, desc: desc });
      },
      DeleteArticle: () => {
        dispatch({ type: "DELETE_ARTICLE" });
      },
    };
  }
)(Update);
