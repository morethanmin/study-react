import React, { Component } from "react";

class Contents extends Component {
  render() {
    return (
      <div>
          <h1>{this.props.title}</h1>
          <div>{this.props.desc}</div>
      </div>
    );
  }
}

export default Contents;
