import React from "react";

import "./App.css";
import { CustomerList } from "./components/CustomerList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bank System</h1>
      </header>

      <CustomerList />
    </div>
  );
}

export default App;
