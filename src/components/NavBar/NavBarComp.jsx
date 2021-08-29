//import React from 'react'

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import CartWidget from "../Widget/CartWidget";
import "./NavBarComp.css"

function NavBarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Ivosol-Perif</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Shop</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    <CartWidget/>
    </Navbar>
  );
}

export default NavBarComp;
