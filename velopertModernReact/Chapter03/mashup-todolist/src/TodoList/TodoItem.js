import React from "react";
import styled from "styled-components";
import { TiDelete } from "react-icons/ti";
import { MdDone } from "react-icons/md";

const TodoItemBlock = styled.div`
  /* background-color: gray; */
  padding-bottom: 30px;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;
const TiDeleteStyled = styled(TiDelete)`
  /* background-color: gray; */
  font-size: 25px;
  display: none;
  ${TodoItemBlock}:hover & {
    display: block;
  }
`;

const Circle = styled.div`
  /* background-color: gray; */
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid black;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-basis: 35px;
  flex-shrink: 0; /* 기본값 */
`;

const TextBlock = styled.div`
  /* background-color: gray; */
  padding-left: 30px;
  flex: 1;
`;

const MdDoneStyled = styled(MdDone)`
  font-size: 30px;
  cursor: pointer;
  width: 50px;
  display: ${(props) => (props.toggle ? "block" : "none")};
`;

export default function TodoItem({ toggle }) {
  return (
    <TodoItemBlock>
      <Circle>
        <MdDoneStyled toggle={toggle} />
      </Circle>

      <TextBlock>테스트입니다.</TextBlock>
      <TiDeleteStyled />
    </TodoItemBlock>
  );
}
