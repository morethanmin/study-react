import React, {Component} from 'react';
import DisplayNumber from "../conponents/DisplayNumber";
import store from "../store";
export default class extends Component{
  state = {number: store.getState().number}
  constructor(props){
    super(props);
    //dispatch메소드가 실행 될 때마다 리스너 함수가 실행된다.
    store.subscribe(function () {
      this.setState({number:store.getState().number})
    }.bind(this))
  }
  render(){
    return (
      <DisplayNumber number={this.state.number}></DisplayNumber>
    )
  }
}