import AddNumber from "../conponents/AddNumber";
import { connect } from "react-redux";

//react-redux에서 store.dispatch를 첫 인자로 제공해준다.
//그리고 store의 근원지는 app을 감싸고있는 provider에서 공급된다.
function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: function (size) {
      dispatch({type:'INCREMENT',size: size})
    }
  }
}

//connect의 리턴 값이 함수이고, 그함수를 다시 실행한 값을 다시 export한다.
//connect메서드의 인자는 두가지를 넣을 수 있다.
export default connect(null,mapReduxDispatchToReactProps)
(AddNumber);




/*
import React, {Component} from 'react';
import AddNumber from "../conponents/AddNumber";
import store from "../store";
export default class extends Component{
    
  render(){
    return (
      <AddNumber onClick={function (size) {
        store.dispatch({type:'INCREMENT',size: size})
      }.bind(this)}></AddNumber>
    )
  }
}
*/