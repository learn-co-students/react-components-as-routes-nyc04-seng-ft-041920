import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import NavBar from './NavBar'
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
