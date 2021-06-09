import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
} from "../modules/counter-saga";

export default function CounterContainer() {
  const number = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}
