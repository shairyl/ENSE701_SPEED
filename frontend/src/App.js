import React from "react";
import Home from "./pages/home";
import Submission from "./pages/submission";
import Search from "./pages/searchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  Redirect,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

const App = () => {
  //testing
  return (
    <Router>
      <div>
        <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
        <ul className="header">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/analyst">Analyst</NavLink>
          </li>
          <li>
            <NavLink to="/moderator">Moderator</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>
            <NavLink to="/submission">Submit</NavLink>
          </li>
        </ul>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/submission" component={Submission} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
