import React from "react";
import Home from "./pages/home";
import Submission from "./pages/submission";
import Moderator from "./pages/moderator";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  //testing
  return (
    <Router>
      <div>
        <div className="content">
          <Moderator />
          { /*          <Switch>
            <Route exact pasth="/" component={submission} />
  </Switch> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
