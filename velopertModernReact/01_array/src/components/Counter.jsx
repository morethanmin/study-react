import React, { useState, useReducer, Component } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "PLUS":
      return state + 1;

    case "MINUS":
      return state - 1;

    default:
      return state;
  }
};

const CounterF = function () {
  const [number, dispatch] = useReducer(reducer, 0, (state) => {
    return state;
  });
  const onIncrease = () => {
    dispatch({ type: "PLUS" });
  };
  const onDecrease = () => {
    dispatch({ type: "MINUS" });
  };

  return (
    <>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  );
};

const CounterC = class extends Component {
  render() {
    return <div></div>;
  }
};
export default CounterC;
