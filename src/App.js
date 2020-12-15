import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import TitleSection from "./components/titleSection/titleSection.component";
import TodoSection from "./components/todoSection/todoSection.component";
// import ProgressSection from "./components/progressSection/progressSection.component";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <TitleSection />
        <TodoSection />
        {/* <ProgressSection /> */}
      </div>
    </Router>
  );
}

export default App;
