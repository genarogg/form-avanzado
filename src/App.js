import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./pages/my-form/components/form-login";

import "./css/icomoon/style.css";
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Form} />
        <Route exact path="/form" component={Form} />
        <Route component={From} />
      </Switch>
    </Router>
  );
}

export default App;
