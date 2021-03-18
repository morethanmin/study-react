import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((preNumber) => preNumber + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setNumber((preNumber) => preNumber - 1);
        }}
      >
        -1
      </button>
    </>
  );
}
