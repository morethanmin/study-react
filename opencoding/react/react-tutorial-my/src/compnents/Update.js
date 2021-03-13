import React, { Component } from "react";

class Update extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            desc: this.props.desc
        }
    }
  render() {
    return (
      <form
        onSubmit={function (e) {
          e.preventDefault();
          this.props.onSubmit(this.state.title,this.state.desc);
        }.bind(this)}
      >
        <h1>Update</h1>
        <input 
        placeholder="title" 
        onChange={(e)=>{
            this.setState({title:e.target.value})
        }} 
        type="text" 
        value={this.state.title}
        >
        </input>
        <input
          placeholder="decription"
          onChange={(e)=>{
            this.setState({desc:e.target.value})
          }}
          type="text"
          value={this.state.desc}
        ></input>
        <button>submit</button>
      </form>
    );
  }
}

export default Update;
