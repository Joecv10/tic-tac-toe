import logo from "./logo.svg";
import "./App.css";
import "./Square";
import React from "react";
import Square from "./Square";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    );
  }
}

export default App;
