import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  width: 100%;
  height: 165px;
  margin-top: 45px;
  padding-left: 35px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0px;
    font-weight: 5px;
    color: #3a4045;
  }
  h2 {
    margin-top: 5px;
    font-weight: 300;
    color: #a0a0a0;
  }
  h3 {
    margin-top: 40px;
    font-weight: 5px;
    color: #78debe;
  }
`;

export default function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2021년 03월 18일</h1>
      <h2>목요일</h2>
      <h3>할 일 2개 남음</h3>
    </TodoHeadBlock>
  );
}
