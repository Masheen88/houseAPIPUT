import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function App() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <Navbar className="houseNavbar" sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Houses API ;)</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#viewhome">
              <span className="currentNav" id="currentNav">
                View Houses{" "}
              </span>
              <strong>(Current)</strong>
            </Nav.Link>
            <NavDropdown title="House Details" id="basic-nav-dropdown">
              <NavDropdown.Item href="#house1">View House 1</NavDropdown.Item>
              <NavDropdown.Item href="#house2">View House 2</NavDropdown.Item>
              <NavDropdown.Item href="#house3">View House 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#house4">
                View All Houses
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
