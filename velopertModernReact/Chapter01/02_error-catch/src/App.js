import React from "react";
import User from "./components/User";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const user = {
    id: 1,
    username: "velopert",
  };
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}

export default App;
