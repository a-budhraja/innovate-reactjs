import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
                <Card bg={'light'}>
                    <Card.Body>
                        <Card.Title>User Profile</Card.Title>
                        {
                            this.state.isLoggedIn === "true" ?
                                <Card.Text>
                                    <Image src={this.state.profileImgURL} alt="Unable to load Profile pic" roundedCircle />
                                    <br />Welcome <b>{this.state.name}</b>
                                    <br />Your email id is <b>{this.state.email}</b>
                                </Card.Text>
                                :
                                <Card.Text>Login to see your data.<br />
                                <Button variant="outline-primary"><NavLink to="/login">Login</NavLink></Button>
                                </Card.Text>
                        }
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Profile;