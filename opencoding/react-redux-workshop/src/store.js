import { createStore } from "redux";

var initState = {
  mode: "welcome",
  selected_content_id: 0,
  welcome_content: {
    title: "WEB",
    desc: "Hello, WEB",
  },
  contents: [
    { id: 0, title: "HTML", desc: "HTML is ..." },
    { id: 1, title: "CSS", desc: "CSS is ..." },
    { id: 2, title: "JavaScript", desc: "JavaScript is ..." },
  ],
};
function reducer(state = initState, action) {
  console.log(action);
  switch (action.type) {
    case "WELCOME": {
      return {
        ...state,
        mode: "welcome",
      };
    }
    case "READ": {
      return {
        ...state,
        mode: "read",
        selected_content_id: action.id,
      };
    }
    case "CREATE": {
      return {
        ...state,
        mode: "create",
      };
    }
    case "UPDATE": {
      return {
        ...state,
        mode: "update",
      };
    }
    case "CREATE_ARTICLE": {
      //title, desc
      let NewContents = state.contents.concat();
      const id = state.contents[state.contents.length - 1].id + 1;
      NewContents.push({ id: id, title: action.title, desc: action.desc });

      return {
        ...state,
        contents: NewContents,
        mode: "welcome",
      };
    }
    case "UPDATE_ARTICLE": {
      //action.title, action.desc, state.selected_content_id
      let NewContents = state.contents.concat();
      let id = state.selected_content_id,
        i = 0;
      for (const content of NewContents) {
        if (content.id === state.selected_content_id) {
          break;
        }
        i++;
      }
      NewContents[i] = { id: id, title: action.title, desc: action.desc };
      return {
        ...state,
        contents: NewContents,
        mode: "read",
      };
    }
    case "DELETE_ARTICLE": {
      //state.selected_content_id
      let NewContents = state.contents.concat();
      const id = state.selected_content_id;
      NewContents.splice(id, 1);
      return {
        ...state,
        contents: NewContents,
        mode: "welcome",
      };
    }
    //other
    default:
      return state;
      break;
  }
}
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
