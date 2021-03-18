import React from "react";
const CreateUser = function (props) {
  console.log("CreateUser");
  return (
    <>
      <input
        name="username"
        ref={props.FocusTarget}
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
};
export default React.memo(CreateUser);
