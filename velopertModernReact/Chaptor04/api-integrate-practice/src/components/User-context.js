import React, { useState, useEffect } from "react";
import { useUsersDispatch, useUsersState, getUser } from "../UsersContext";

export default function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);
  const { data, error, loading } = state.user;
  if (loading === true) return <div>로딩중...</div>;
  if (error === true) return <div>에러가 발생했습니다.</div>;
  if (data === null) return null;
  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.email}</h2>
    </div>
  );
}
