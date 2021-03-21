import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import useAsync from "./useAsync";
import User from "./User";
const getUsers = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  return res.data;
};

export default function Users() {
  const [state, fetch] = useAsync(getUsers, [], true);
  const [id, setId] = useState(null);

  const { data, loading, error } = state;
  useEffect(() => {
    // fetchUsers();
    return () => {
      //cleanup
    };
  }, []);

  if (loading === true) return <div>로딩중...</div>;
  if (error === true) return <div>에러가 발생했습니다.</div>;
  if (data === null) return <button onClick={fetch}>getUsers</button>;
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
      <button onClick={fetch}>refresh</button>
      {id && <User id={id} />}
    </div>
  );
}
