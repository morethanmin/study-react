import React, { Component } from "react";

class Control extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a
              href="#"
              onClick={function (e) {
                e.preventDefault();
                this.props.onClick("create");
              }.bind(this)}
            >
              create
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Control;
