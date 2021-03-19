import React from "react";
import TodoTemplate from "./TodoTemplate";
import TodoCreate from "./TodoCreate";
import TodoHead from "./TodoHead";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

export default function index() {
  return (
    <TodoTemplate>
      <TodoHead></TodoHead>
      <TodoList></TodoList>
      <TodoCreate></TodoCreate>
    </TodoTemplate>
  );
}
