import React, { useRef, useState } from "react";
import "./App.css";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";

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
    },
    {
      id: 2,
      username: "tester",
      password: "1234",
    },
    {
      id: 3,
      username: "liz",
      password: "fdas",
    },
    ,
  ]);
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const onSubmit = (e) => {
    const user = {
      id: nextId.current,
      username,
      password,
    };
    setUsers(users.concat(user));
    setInput({
      username: "",
      password: "",
    });
    nextId.current++;
    inputAccount.current.focus();
  };
  return (
    <>
      <CreateUser
        username={username}
        password={password}
        onChange={onChange}
        onSubmit={onSubmit}
        inputAccount={inputAccount}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
