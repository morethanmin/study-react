import React from "react";

export default function CreateUser(props) {
  return (
    <>
      <input
        name="username"
        ref={props.inputAccount}
        onChange={props.onChange}
        value={props.username}
        placeholder="아이디"
      />
      <input
        name="password"
        onChange={props.onChange}
        value={props.password}
        placeholder="비밀번호"
      />
      <button onClick={props.onSubmit}>생성</button>
    </>
  );
}
