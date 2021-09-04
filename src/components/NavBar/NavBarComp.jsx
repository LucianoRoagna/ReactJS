//import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import  NavDropdown  from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import CartWidget from "../Widget/CartWidget";
import "./NavBarComp.css"



function NavBarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
        <Navbar.Brand href="Home">Lazo-Gaming</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Link to="/">
            <Nav.Link href="Home">Products</Nav.Link>
            </Link>
            
            
        <NavDropdown title="Brands" id="collasible-nav-dropdown">
          <Link to="/brand/Hyperex">
        <NavDropdown.Item href="#action/3.1">Hyperex</NavDropdown.Item>
        </Link>
        <Link to="/brand/Logitech">
        <NavDropdown.Item href="#action/3.2">Logitech</NavDropdown.Item>
        </Link>
        <Link to="/brand/Reddragon">
        <NavDropdown.Item href="#action/3.3">Reddragon</NavDropdown.Item>
        </Link>
        <Link to="/brand/Marvo">
       <NavDropdown.Item href="action/3.4">Marvo</NavDropdown.Item>
       </Link>
       <Link to="/brand/Nisuta">
        <NavDropdown.Item href="#action/3.5">Nisuta</NavDropdown.Item>
        </Link>
       
      </NavDropdown>
      
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    <CartWidget/>
    </Navbar>
  );
}

export default NavBarComp;
