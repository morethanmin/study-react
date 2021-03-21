import React, { useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";

const getUser = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return res.data;
};
export default function User({ id }) {
  const [state, fetch] = useAsync(() => getUser(id), [id]);
  const { data, loading, error } = state;
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
