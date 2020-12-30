import React, { Component } from "react";
import Card from 'react-bootstrap/Card'

class Home extends Component {
  render() {
    return (
      <Card bg={'info'} style={{ width: '15rem' }}>
        <Card.Img variant="top" src="./logo.png" />
        <Card.Body>
          <Card.Text>
            Hello World
        </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Home;