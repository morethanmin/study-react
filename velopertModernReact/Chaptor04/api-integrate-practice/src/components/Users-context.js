import React, { useEffect, useState, useReducer } from "react";
import { useUsersDispatch, useUsersState, getUsers } from "../UsersContext";
import User from "./User-context";

export default function Users() {
  const dispatch = useUsersDispatch();
  const state = useUsersState();
  const { data, loading, error } = state.users;
  const [id, setId] = useState(null);

  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading === true) return <div>로딩중...</div>;
  if (error === true) return <div>에러가 발생했습니다.</div>;
  if (!data) return <button onClick={fetchData}>getUsers</button>;
  return (
    <div>
      <div>
        <ul>
          {data.map((user) => (
            <li key={user.id} onClick={() => setId(user.id)}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={fetchData}>refresh</button>
      {id && <User id={id} />}
    </div>
  );
}
