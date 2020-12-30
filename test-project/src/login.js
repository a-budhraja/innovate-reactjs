import React, { Component } from "react";
import GoogleBtn from './components/googleLogin';
import Badge from 'react-bootstrap/Badge'
 
class Login extends Component {
  render() {
    return (
      <Badge variant="light"><GoogleBtn/></Badge>      
    );
  }
}
 
export default Login;