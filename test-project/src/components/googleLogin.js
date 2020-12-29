
import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CLIENT_ID = '365446770436-vplp1obko0qpi3si72m0b87t663d1o6j.apps.googleusercontent.com';


class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLoggedIn: true,
        accessToken: response.accessToken,
        profileData: response.profileObj
      }));
      localStorage.setItem("name", response.profileObj.name);
      localStorage.setItem("email", response.profileObj.email);
      localStorage.setItem("profileImg", response.profileObj.imageUrl);
      localStorage.setItem("isLoggedIn", true);
    }
    console.log(this.state.profileData);
  }

  logout (response) {
    this.setState(state => ({
      isLoggedIn: false,
      accessToken: ''
    }));
    localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.setItem("isLoggedIn", false);
  }

  handleLoginFailure (response) {
    alert('Failed to log in');
    localStorage.setItem("isLoggedIn", false);
  }

  handleLogoutFailure (response) {
    alert('Failed to log out');
    localStorage.setItem("isLoggedIn", true);
  }

  render() {
    return (    
    <div>        
      { this.state.isLoggedIn ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>
        :
        <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
          isSignedIn={true}
        />
      }
      { this.state.accessToken ? <h5>You are successfully loggged in.</h5> : null }
    </div>    
    )
  }
}

export default GoogleBtn;