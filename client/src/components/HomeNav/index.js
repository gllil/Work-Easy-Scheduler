import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function HomeNav() {
  return (
    <Container fluid>
      <Navbar collapseOnSelect bg="light" variant="light" expand="md">
        <Navbar.Brand href="/">Work Easy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/adminregister">Get Started</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/adminlogin">Admin Login</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/employeelogin">Employee Login</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default HomeNav;
