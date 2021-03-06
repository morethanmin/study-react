import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <h1><a href="#" onClick={this.props.onClick}>WEB</a></h1>
        <div>World Wide Web!</div>
      </header>
    );
  }
}

export default Header;
