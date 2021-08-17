//import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import  Container  from 'react-bootstrap/Container'
import  NavDropdown  from 'react-bootstrap/NavDropdown'


function NavBarComp() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Ivosol-Reposeras</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">Shop</Nav.Link>
      <NavDropdown title="Products" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Pool chairs</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Tables</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">indoor chairs</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">benches</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">About Us</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBarComp
