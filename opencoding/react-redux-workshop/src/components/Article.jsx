import React, { Component } from "react";

export default class Article extends Component {
  render() {
    return (
      <>
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
        {this.props.mode === "read" ? (
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();

                    this.props.onClickUpdate();
                  }}
                >
                  Update
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();

                    this.props.onClickDelete();
                  }}
                >
                  Delete
                </a>
              </li>
            </ul>
          </nav>
        ) : null}
      </>
    );
  }
}
