import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Profile from "./profile";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>ReactJS Project</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;