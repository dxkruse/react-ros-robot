import React, { Component } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

class Header extends Component {
  render() {
    return (
      <Container>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            Dietrich Kruse - Robotics Engineer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/robotpage">Turtlebot</Nav.Link> 
            <Nav.Link href="/armpage">Robotic Arm</Nav.Link> 
            <Nav.Link href="/about">About</Nav.Link>           
          </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>   
      </Container>    
    );
  }
}

export default Header;