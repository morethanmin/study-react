import React, { Component } from "react";

export default class Control extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                this.props.onClickCreate();
              }}
            >
              Create
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
