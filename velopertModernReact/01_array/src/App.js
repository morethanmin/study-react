import React, { useRef, useState, useMemo, useCallback } from "react";
import "./App.css";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";

const countSelectedUser = (users) => {
  console.log("함수");
  return users.filter((user) => user.selected).length;
};

function App() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const { username, password } = input;
  const inputAccount = useRef();
  const nextId = useRef(4);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      password: "asdfg",
      selected: false,
    },
    {
      id: 2,
      username: "tester",
      password: "1234",
      selected: false,
    },
    {
      id: 3,
      username: "liz",
      password: "fdas",
      selected: false,
    },
    ,
  ]);
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
    },
    [input]
  );

  const onSubmit = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      password,
      selected: false,
    };
    setUsers((users) => users.concat(user));
    setInput({
      username: "",
      password: "",
    });
    nextId.current++;
    inputAccount.current.focus();
  }, [username, password]);

  const onDelete = useCallback((id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, selected: !user.selected } : user
      )
    );
  }, []);

  const count = useMemo(() => countSelectedUser(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        password={password}
        onChange={onChange}
        onSubmit={onSubmit}
        inputAccount={inputAccount}
      />
      <UserList users={users} onDelete={onDelete} onToggle={onToggle} />
      <div>선택된 계정의 수 : {count}</div>
    </>
  );
}

export default App;
