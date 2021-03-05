import React, { Component } from 'react';
import './App.css';
import AddNumberRoot from "./conponents/AddNumberRoot"
import DisplayNumberRoot from "./conponents/DisplayNumberRoot"




class App extends Component {
  state ={number:0}
  render() {
    return(
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot unit="kg"></DisplayNumberRoot>
    </div>
    )
  };
}

export default App;