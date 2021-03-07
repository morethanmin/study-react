import React, { Component } from "react";
import "./App.css";
import Header from "./compnents/Header";
import Toc from "./compnents/Toc";
import Control from "./compnents/Control";
import Content from "./compnents/Content";
import Welcome from "./compnents/Welcome";

import Create from "./compnents/Create";
import Update from "./compnents/Update";

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

  createContent(title, desc) {
    const newContents = this.state.contents.concat({
      id: this.state.contents.length,
      title: title,
      desc: desc,
    });
    //console.log(this.state)
    this.setState({
      selected_id: this.state.contents.length,
      mode: "read",
      contents: newContents,
    });
  }

  updateContent(id, title, desc) {
    var newContents = this.state.contents
    newContents[id] = {id:id, title: title, desc: desc}
    this.setState({
      selected_id: id,
      mode: "read",
      contents:newContents})
  }

  deleteContent(id) {
    var newContents = this.state.contents
    
    newContents.splice(id,1)
    
    this.setState({
      selected_id: null,
      mode: "welcome",
      contents:newContents})
  }
  

  render() {

    let contents = this.state.contents

    const content = contents.find((element)=>{
      if(element.id === parseInt(this.state.selected_id))  {
        return true;
      }
    });

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
            this.setState({ mode: "read", selected_id: id });
          }}
        />
        <Control
          onClick={(mode) => {
            this.setState({ mode });
          }}
        />
        {this.state.mode === "welcome" ? (
          <Welcome
            title={this.state.welcome.title}
            desc={this.state.welcome.desc}
          />
        ) : this.state.mode === "create" ? (
          <Create
            onSubmit={(title, desc) => {
              this.createContent(title, desc);
            }}
          />
        ) : this.state.mode === "update" ? (
          <Update
            title={content.title}
            desc={content.desc}
            onSubmit={(title, desc) => {
              this.updateContent(this.state.selected_id, title, desc);
            }}
          />
        ) : (
          <Content
            title={content.title}
            desc={content.desc}
            onUpdate={() => {
              this.setState({ mode: "update" });
            }}
            onDelete={() => {
              this.deleteContent(this.state.selected_id);
            }}
          />
        )}
      </div>
    );
  }
}

export default App;
