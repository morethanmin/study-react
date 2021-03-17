import React, { useContext } from "react";
import { UserDispatch } from "../App_useReducer";

const User = React.memo(function ({ user }) {
  const dispatch = useContext(UserDispatch);
  const columStyle = {
    cursor: "pointer",
    color: user.selected === true ? "green" : "black",
  };
  return (
    <div>
      <span
        onClick={() => {
          dispatch({ type: "TOGGLE_USER", id: user.id });
        }}
        style={columStyle}
      >
        {user.id}-{user.username}-{user.password}
      </span>
      <button
        onClick={() => {
          dispatch({ type: "DELETE_USER", id: user.id });
        }}
      >
        삭제
      </button>
    </div>
  );
});

const UserList = function ({ users }) {
  console.log("UserList");

  return (
    <>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </>
  );
};
export default React.memo(UserList);
