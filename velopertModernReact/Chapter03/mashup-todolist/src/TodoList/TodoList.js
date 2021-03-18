import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1;
  /* background-color: gray; */
  display: flex;
  padding: 20px 32px;
  padding-bottom: 48px;
  flex-direction: column;
  overflow-y: auto;
`;

export default function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem toggle={true} />
      <TodoItem toggle={false} />
      <TodoItem toggle={true} />
      <TodoItem toggle={true} />
      <TodoItem toggle={true} />
      <TodoItem toggle={true} />
      <TodoItem toggle={true} />
      <TodoItem toggle={true} />
      <TodoItem toggle={true} />
      <TodoItem toggle={true} />
      <TodoItem toggle={true} />
      <TodoItem toggle={true} />
      <TodoItem toggle={true} />
      <TodoItem toggle={true} />
    </TodoListBlock>
  );
}
