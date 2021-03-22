import React, { useEffect, useState } from "react";
import axios from "axios";

export default function User() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const fetchUsers = async () => {
    setUsers(null);
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
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
