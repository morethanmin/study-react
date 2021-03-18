import TodoList from "./TodoList";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color :#e9ecef;
        margin: 0px;
        padding: 0px;
    }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList></TodoList>
    </>
  );
}

export default App;
