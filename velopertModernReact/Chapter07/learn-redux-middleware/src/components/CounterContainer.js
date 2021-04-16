import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../modules/counter";
import Counter from "./Counter";
import { increaseAsync, decreaseAsync } from "../modules/counter";

export default function CounterContainer() {
  const number = useSelector((state) => state.counter);
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
