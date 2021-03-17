import { useState, useReducer, useCallback } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        [action.name]: action.value,
      };

    case "RESET":
      return {
        ...state,
        ...action.initialForm,
      };

    default:
      break;
  }
  return state;
};

function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm, (state) => {
    return state;
  });

  // change
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "INPUT_CHANGE", name, value });
  }, []);
  const reset = useCallback(() => dispatch({ type: "RESET", initialForm }), [
    initialForm,
  ]);
  return [state, onChange, reset];
}

export default useInputs;
