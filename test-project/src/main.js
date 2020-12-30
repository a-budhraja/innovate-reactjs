import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Profile from "./profile";
import Badge from 'react-bootstrap/Badge'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <Container>
          <div>
            <h1><Badge variant="secondary">React JS Project</Badge></h1>
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
        </Container>
      </HashRouter>
    );
  }
}

export default Main;