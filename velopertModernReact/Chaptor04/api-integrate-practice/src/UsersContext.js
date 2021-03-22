import React, { createContext, useReducer, useContext } from "react";
import {
  createAsyncDispatcher,
  createAsyncHandler,
  initialAsyncState,
} from "./asyncActionUtils";
import * as api from "./api"; // api 파일에서 내보낸 모든 함수들을 불러옴

const initialState = {
  users: initialAsyncState,
  user: initialAsyncState,
};

const usersHandler = createAsyncHandler("GET_USERS", "users");
const userHandler = createAsyncHandler("GET_USER", "user");
// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
function reducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
    case "GET_USERS_SUCCESS":
    case "GET_USERS_ERROR":
      return usersHandler(state, action);
    case "GET_USER":
    case "GET_USER_SUCCESS":
    case "GET_USER_ERROR":
      return userHandler(state, action);
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

const UsersDispatchContext = createContext(null);
const UsersStateContext = createContext(null);

export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersDispatchContext.Provider value={dispatch}>
      <UsersStateContext.Provider value={state}>
        {children}
      </UsersStateContext.Provider>
    </UsersDispatchContext.Provider>
  );
}

export function useUsersDispatch() {
  const context = useContext(UsersDispatchContext);
  if (!context) throw new Error("Cannot find UsersProvider");
  return context;
}

export function useUsersState() {
  const context = useContext(UsersStateContext);
  if (!context) throw new Error("Cannot find UsersProvider");
  return context;
}

export const getUsers = createAsyncDispatcher("GET_USERS", api.getUsers);
export const getUser = createAsyncDispatcher("GET_USER", api.getUser);
