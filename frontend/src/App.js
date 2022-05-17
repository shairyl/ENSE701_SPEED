import React from "react";
import Home from "./pages/home";
import Submission from "./pages/submission";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  //testing
  return (
    <Router>
      <div>
        <div className="content">
          <Submission />
          {/*           <Switch>
            <Route exact path="/" component={submission} />
          </Switch> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
