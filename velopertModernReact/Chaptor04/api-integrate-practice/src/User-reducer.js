import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "LOADING":
      return {
        users: null,
        loading: true,
        error: null,
      };
    case "SUCCESS":
      return {
        users: action.data,
        loading: false,
        error: false,
      };
    case "FAILURE":
      return {
        users: null,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default function User() {
  const [state, dispatch] = useReducer(
    reducer,
    { users: null, loading: null, error: null },
    (state) => state
  );
  const { users, loading, error } = state;
  const fetchUsers = async () => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: "SUCCESS", data: res.data });
    } catch (e) {
      dispatch({ type: "FAILURE" });
    }
  };

  useEffect(() => {
    fetchUsers();
    return () => {
      //cleanup
    };
  }, []);

  if (loading === true) return <div>로딩중...</div>;
  if (error === true) return <div>에러가 발생했습니다.</div>;
  if (users === null) return null;
  return (
    <div>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={fetchUsers}>refresh</button>
    </div>
  );
}
