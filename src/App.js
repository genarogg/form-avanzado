import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Switch>
            
            {/* <Route exact path="/" component={Login} /> */}
            {/* <Route component={Proyectos} /> */}
          </Switch>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;