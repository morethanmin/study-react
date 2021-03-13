import React, { Component } from "react";

class Contents extends Component {
  render() {
    return (
      <div>
        <article>
          <h1>{this.props.title}</h1>
          <div>{this.props.desc}</div>
        </article>
        <div>
          <ul>
            <li>
              <a
                href="#"
                onClick={function (e) {
                  e.preventDefault();
                  this.props.onUpdate();
                }.bind(this)}
              >
                Update
              </a>
            </li>
            <li>
              <a 
              href="#" 
              onClick={function (e) {
                e.preventDefault();
                this.props.onDelete();
              }.bind(this)}
              >Delete</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contents;
