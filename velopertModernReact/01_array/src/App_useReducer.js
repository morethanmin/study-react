import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  useReducer,
} from "react";
import "./App.css";
import CreateUser from "./components/CreateUser";
import UserList from "./components/UserList";
import useInputs from "./Hooks/useInputs_useReducer";
import produce from "immer";

const countSelectedUser = (users) => {
  console.log("함수");
  return users.filter((user) => user.selected).length;
};

const initialState = {
  users: [
    {
      id: 1,
      username: "velopert",
      password: "asdfg",
      selected: true,
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
  ],
};

const reducer = (state, action) => {
  console.log(action.type, state, action);
  switch (action.type) {
    case "CREATE_USER":
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    case "DELETE_USER":
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    case "TOGGLE_USER":
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.selected = !user.selected;
      });
    default:
      return state;
  }
};

export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState, (state) => {
    return state;
  });
  const { users } = state;
  const [{ username, password }, onChange, reset] = useInputs({
    username: "",
    password: "",
  });
  const FocusTarget = useRef();
  const nextId = useRef(4);

  const onSubmit = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      password,
      selected: false,
    };

    dispatch({ type: "CREATE_USER", user });
    nextId.current++;
    FocusTarget.current.focus();
    reset();
  }, [username, password, reset]);

  const count = useMemo(() => countSelectedUser(users), [users]);
  return (
    <>
      <UserDispatch.Provider value={dispatch}>
        <CreateUser
          username={username}
          password={password}
          onChange={onChange}
          onSubmit={onSubmit}
          FocusTarget={FocusTarget}
        />
        <UserList users={users} />
        <div>선택된 계정의 수 : {count}</div>
      </UserDispatch.Provider>
    </>
  );
}

export default App;
