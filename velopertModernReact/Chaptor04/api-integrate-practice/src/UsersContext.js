import React, { useContext, useReducer, createContext } from "react";
import axios from "axios";

const initialState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },
  user: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data) => ({
  loading: false,
  data: data,
  error: false,
});

const error = (data) => ({
  loading: false,
  data: null,
  error: data,
});

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: loadingState,
      };
    case "GET_USERS_SUCCESS":
      return {
        ...state,
        users: success(action.data),
      };
    case "GET_USERS_ERROR":
      return {
        ...state,
        users: error(action.data),
      };

    case "GET_USER":
      return {
        ...state,
        user: loadingState,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        user: success(action.data),
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        user: error(action.data),
      };

    default:
      break;
  }
};

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

export async function getUsers(dispatch) {
  dispatch({ type: "GET_USERS" });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({ type: "GET_USERS_SUCCESS", data: res.data });
  } catch (error) {
    dispatch({ type: "GET_USERS_ERROR", data: error });
  }
}

export async function getUser(dispatch, id) {
  dispatch({ type: "GET_USER" });
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({ type: "GET_USER_SUCCESS", data: res.data });
  } catch (error) {
    dispatch({ type: "GET_USER_ERROR", data: error });
  }
}
