import React from "react";

const User = function ({ user, onDelete, onToggle }) {
  const columStyle = {
    cursor: "pointer",
    color: user.selected === true ? "green" : "black",
  };
  return (
    <div>
      <span
        onClick={() => {
          onToggle(user.id);
        }}
        style={columStyle}
      >
        {user.id}-{user.username}-{user.password}
      </span>
      <button onClick={() => onDelete(user.id)}>삭제</button>
    </div>
  );
};

const UserList = function ({ users, onDelete, onToggle }) {
  console.log("UserList");

  return (
    <>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};
export default React.memo(UserList);
