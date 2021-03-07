import React, { Component } from "react";

export default class Create extends Component {
  state = {
    title: this.props.title,
    desc: this.props.desc,
  };
  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.UpdateArticle(this.state.title, this.state.desc);
        }}
      >
        <h1>Update</h1>
        <input
          value={this.state.title}
          onChange={(e) => {
            this.setState({ title: e.target.value });
          }}
          type="text"
          placeholder="title"
        />
        <input
          value={this.state.desc}
          onChange={(e) => {
            this.setState({ desc: e.target.value });
          }}
          type="text"
          placeholder="description"
        />
        <button>submit</button>
      </form>
    );
  }
}
