import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/icomoon/style.css";
import "./css/styleMiselanea.css";

import Layouts from "./components/Layouts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Layouts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
