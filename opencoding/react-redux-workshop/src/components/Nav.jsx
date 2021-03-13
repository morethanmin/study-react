import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    var tags = [];
    for (var i = 0; i < this.props.data.length; i++) {
      const d = this.props.data[i];

      tags.push(
        <li key={d.id}>
          <a
            href="#"
            onClick={(e) => {
              this.props.onClick(d.id);
            }}
          >
            {d.title}
          </a>
        </li>
      );
    }

    return (
      <nav>
        <ol>{tags}</ol>
      </nav>
    );
  }
}
