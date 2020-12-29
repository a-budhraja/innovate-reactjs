import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Profile extends Component {

    constructor(props) {
        super(props);        
    
        this.state = {
          isLoggedIn: localStorage.getItem("isLoggedIn"),
          name: localStorage.getItem("name"),
          email: localStorage.getItem("email"),
          profileImgURL: localStorage.getItem("profileImg")
        };
        console.log(this.state);
    }
    
    render() {
        return (            
            <div>
                <h2>User Profile</h2>
                {
                    this.state.isLoggedIn === "true" ?
                        <p><img src={this.state.profileImgURL} alt="Unable to load Profile pic" />
                            <br />Welcome <b>{this.state.name}</b>
                            <br />Your email id is <b>{this.state.email}</b>
                            </p>                        
                        : <p>Login to see your data.<br />
                            <button type="button"><NavLink to="/login">Login</NavLink></button></p>
                }

            </div>            
        );        
    }
}

export default Profile;