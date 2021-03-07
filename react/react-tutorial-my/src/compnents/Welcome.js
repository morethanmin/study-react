import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <article>
          <h1>{this.props.title}</h1>
          <div>{this.props.desc}</div>
        </article>
      </div>
    );
  }
}

export default Welcome;
