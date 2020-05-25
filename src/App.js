import React from "react";

import "./App.css";
import DataCardGroup from "./components/data-card-group/DataCardGroup";

const  App=()=> {
  return (
    <div className="App">
      <h1>Coronavirus Tracker</h1>
      <p>Live covid-19 tracker with all countries.</p>
      <div className="Container">
        <DataCardGroup />
      </div>
    </div>
  );
}

export default App;
