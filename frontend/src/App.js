import React from "react";
import Home from "./pages/home";
import Submission from "./pages/submission";
import Moderator from "./pages/moderator";
import Search from "./pages/searchPage";
import Analyst from "./pages/analysts";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  //Redirect,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

const App = () => {
  //testing
  return (
    <Router>
      <div>
        
        <ul className="header">
          <nav>
            <a href="#" class="logo">
              <h1>
                <span class="jab">Speed</span><span class="tv">WEB</span
                ><span class="fist">&infin;</span>
              </h1>
            </a>
          </nav>
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/submission">Submit</NavLink>
          </li>
          <li>
            <NavLink to="/moderator">Moderator</NavLink>
          </li>
          <li>
            <NavLink to="/analyst">Analyst</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
        </ul>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/submission" component={Submission} />
            <Route path="/moderator" component={Moderator} />
            <Route path="/analyst" component={Analyst} />
          </Switch>
        </div>
      </div>
    </Router>
    
  );
};

export default App;
