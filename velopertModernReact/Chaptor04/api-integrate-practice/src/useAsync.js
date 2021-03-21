import React, { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "LOADING":
      return {
        data: null,
        loading: true,
        error: null,
      };
    case "SUCCESS":
      return {
        data: action.data,
        loading: false,
        error: false,
      };
    case "FAILURE":
      return {
        data: null,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

const useAsync = (callback, deps = [], skip = false) => {
  const [state, dispatch] = useReducer(
    reducer,
    { data: null, loading: null, error: null },
    (state) => state
  );
  const fetchData = async () => {
    console.log("fetch");
    dispatch({ type: "LOADING" });
    try {
      const res = await callback();
      dispatch({ type: "SUCCESS", data: res });
    } catch (error) {
      dispatch({ type: "FAILURE", data: error });
    }
  };
  useEffect(() => {
    if (skip) return;
    fetchData();
    return () => {
      //cleanup
    };
  }, deps);
  return [state, fetchData];
};

export default useAsync;
