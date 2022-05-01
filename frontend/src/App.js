import React from "react";
import Home from "./pages/home";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  //testing
  return (
    <Router>
      <div>
        <h1>SPEED testing</h1>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
