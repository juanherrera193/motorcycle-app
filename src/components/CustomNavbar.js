import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './CustomNavbar.css';

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/motorcycles">Motorcycles for sale</Nav.Link>
            <Nav.Link href="/motorcycle">Sell my motorcycle</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default CustomNavbar;