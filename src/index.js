import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About";
import Login from "./Login";
import Home from "./Home";
import Navbar from "./Navbar";

ReactDOM.render(
  // Router is the alias for BrowserRouter component, which is where we declare how React Router will be used
  <Router>
    <div>
      <Navbar />
      {/* In the Route component we say "when the URL matches this specified path, render this specified component" */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      {/* <Route path="/senada" render={() => <h1>Senada</h1>} /> */}
    </div>
  </Router>,
  document.getElementById("root")
);
