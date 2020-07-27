import React from "react";
import "./styles.css";

import HookUserApi from "./HookUserApi/HookUserApi";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <h3>HookUserApi</h3>
      <HookUserApi />
    </div>
  );
}
