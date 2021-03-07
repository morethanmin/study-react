import React, { Component } from "react";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
    };
  }
  render() {
    return (
      <form
        onSubmit={function (e) {
          e.preventDefault();
          this.props.onSubmit(this.state.title,this.state.desc);
        }.bind(this)}
      >
        <h1>Create</h1>

        <input
          placeholder="title"
          onChange={(e) => {
            this.setState({ title: e.target.value });
          }}
          value={this.state.title}
          type="text"
        ></input>
        <input
          placeholder="decription"
          onChange={(e) => {
            this.setState({ desc: e.target.value });
          }}
          value={this.state.desc}
          type="text"
        ></input>
        <button>submit</button>
      </form>
    );
  }
}

export default Create;
