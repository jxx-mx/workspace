import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomComponent from "submodule/src/components/CustomComponent";

function App() {
  return (
    <div className="App">
      <CustomComponent name="Custom Component" />
    </div>
  );
}

export default App;
