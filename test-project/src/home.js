import React, { Component } from "react";
import Figure from 'react-bootstrap/Figure'

class Home extends Component {
  render() {
    return (
      <Figure>
        <Figure.Image
          alt="Logo not available"
          src="./logo.png"
        />
        <Figure.Caption>
          Hello World
  </Figure.Caption>
      </Figure>

    );
  }
}

export default Home;