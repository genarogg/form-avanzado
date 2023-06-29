import React from "react";
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; */ import Form from "./pages/my-form/components/form-login";

/* import { Routes, Route } from "react-router-dom"; */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/icomoon/style.css";
function App() {
  return (
    <>
      {/*  <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/form" component={Form} />
          <Route component={Form} />
        </Switch>
      </Router> */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
