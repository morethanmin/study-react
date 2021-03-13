import DisplayNumber from "../conponents/DisplayNumber";
import { connect } from "react-redux";

function mapReduxStateToReactProps(state) {
  //return한 객체값을 props로 전달해준다.
  return {
    number: state.number,
  };
}

//connect의 리턴 값이 함수이고, 그함수를 다시 실행한 값을 다시 export한다.
export default connect(mapReduxStateToReactProps)(DisplayNumber);

//기존의 redux를 사용할 때의 코드
/*
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
      <DisplayNumber number={this.state.number} unit={this.props.unit}></DisplayNumber>
    )
  }
}
*/
