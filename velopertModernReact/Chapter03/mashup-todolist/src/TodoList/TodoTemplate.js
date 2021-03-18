import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  max-width: 512px;
  height: 768px;
  background-color: white;
  margin: 0 auto;
  box-shadow: 0px 10px 10px 10px #e6e9ec;
  border-radius: 20px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
`;

export default function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}
