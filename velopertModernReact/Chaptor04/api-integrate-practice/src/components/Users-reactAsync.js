import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { useAsync } from "react-async";
import User from "./User-reactAsync";
const getUsers = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  return res.data;
};

export default function Users() {
  const { data, error, isLoading: loading, run } = useAsync({
    deferFn: getUsers,
  });
  const [id, setId] = useState(null);

  if (loading === true) return <div>로딩중...</div>;
  if (error === true) return <div>에러가 발생했습니다.</div>;
  if (!data) return <button onClick={run}>getUsers</button>;
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
      <button onClick={run}>refresh</button>
      {id && <User id={id} />}
    </div>
  );
}
