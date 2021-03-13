import React, { Component, useState, useEffect } from "react";
import "./App.css";

class ClassComp extends Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  };

  //--------------React LifeCycle--------------------
  //컴포넌트가 마운트 즉 렌더되기 전에 호출되는 메소드를 오버라이딩함.
  componentWillUnmount() {}

  //render이후에 호출되는 메소드를 오버라이딩
  componentDidMount() {}

  //render메소드를 호출할 지 말지 정하는 메소드
  //첫번째 인자는 props, 두번째인자는 state
  //return값으로 true일경우,
  //componentWillUpdate() => render()
  shouldComponentUpdate() {
    return true;
  }

  //update가 되기전에 호출
  componentWillUpdate() {}

  //update가 된 후에 호출
  componentDidUpdate() {}

  //class 방식 컴포넌트는 render 함수를 이용해 return을 통해 render한다.
  render() {
    return (
      <div className="container">
        <h2>Class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>{this.state.date}</p>

        <input
          type="button"
          value="random"
          onClick={() => {
            this.setState({ number: Math.random() });
          }}
        ></input>
        <input
          type="button"
          value="date"
          onClick={() => {
            this.setState({ date: new Date().toString() });
          }}
        ></input>
      </div>
    );
  }
}

//react에서 해당 함수를 호출할 때 첫 번째 인자로 props를 주기로 약속했다.
function FuncComp(props) {
  //React.useState
  //useState의 첫번째 인자를 통해 초기값을 설정한다.
  var numberState = useState(props.initNumber);
  //useState는 2개의 값을 가진 배열을 리턴한다.
  //첫번째는 값이고 두번째는 함수를 가지고있다.
  var number = numberState[0];
  //useState를 통해 리턴된 배열의 두번째 값인 함수를 통해 number의 값을 바꿀 수 있다.
  var SetNumber = numberState[1];
  //function 방식 컴포넌트는 자기자신이 render 함수이다.

  // var dateState = useState((new Date()).toString());
  // var date = dateState[0]
  // var SetDate = dateState[1]

  var [date, SetDate] = useState(new Date().toString());
  
  //렌더가끝나고 난 뒤, 해당 함수의 첫번째 인자의 함수가 호출되도록 약속되어있음.
  //class의 compomentDidMount, compomentDidUpdate와 같은 효과(두번째 인자가없을 때)
  //side effect : 함수형 컴포넌트의 메인 이펙트(렌더)외에 사이드 이펙트라는 의미
  useEffect(function(){
    console.log("useEffect")

    return function(){ //useEffect가 실행되기 전에 할수 있는 함수 clean up이라고 말함.
      console.log("useEffectReturn")
    }
  },[number])
//useEffect의 두번째인자로 배열안에 있는 인자가 바뀌었을 때만 해당 useEffect가 호출되도록 설정함.

//componentDidMount 와 같은 효과
useEffect(function(){
  console.log("componentDidMount useEffect")

  return function(){
    //unMount될때 실행됨.
  }  
},[])

  console.log("Render")
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>{date}</p>

      <input
        type="button"
        value="random"
        onClick={() => {
          SetNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="date"
        onClick={() => {
          SetDate(new Date().toString());
        }}
      ></input>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2} />
      <ClassComp initNumber={2} />
    </div>
  );
}

export default App;
