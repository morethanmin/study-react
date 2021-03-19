import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import TodoList from "./TodoList";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoList></TodoList>
    </TodoProvider>
  );
}

export default App;
