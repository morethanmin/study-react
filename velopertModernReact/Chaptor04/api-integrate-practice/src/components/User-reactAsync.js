import React, { useState } from "react";
import axios from "axios";
import { useAsync } from "react-async";

const getUser = async ({ id }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return res.data;
};
export default function User({ id }) {
  const { data, error, isLoading: loading } = useAsync({
    promiseFn: getUser,
    id,
    watch: id,
  });
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
