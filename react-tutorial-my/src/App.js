import React, { Component } from "react";
import "./App.css";
import Header from "./compnents/Header";
import Toc from "./compnents/Toc";
import Control from "./compnents/Control";
import Content from "./compnents/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      selected_id: null,
      contents: [
        { id: 0, title: "HTML", desc: "HTML is..." },
        { id: 1, title: "CSS", desc: "CSS is..." },
        { id: 2, title: "JAVASCRIPT", desc: "JAVASCRIPT is..." },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Header
          onClick={() => {
            this.setState({ mode: "welcome" });
          }}
        />
        <Toc
          contents={this.state.contents}
          onClick={(id) => {
            this.setState({ mode: "read", selected_id: id});
          }}
        />
        {/* <Control/> */}
        {this.state.mode === "welcome" ? (
          <Content
            title={this.state.welcome.title}
            desc={this.state.welcome.desc}
          />
        ) : (
          <Content
            title={this.state.contents[this.state.selected_id].title}
            desc={this.state.contents[this.state.selected_id].desc}
          />
        )}
      </div>
    );
  }
}

export default App;
