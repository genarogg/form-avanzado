import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/icomoon/style.css";

import MyForm from "./components/form/MyForm.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<MyForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
