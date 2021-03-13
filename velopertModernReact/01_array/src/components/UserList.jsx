import React from "react";

export default function UserList({ users }) {
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          {user.id}-{user.username}-{user.password}
        </div>
      ))}
    </>
  );
}
