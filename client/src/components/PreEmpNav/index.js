import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function PreEmpNav() {
  const location = useLocation();

  return (
    <Container fluid>
      <Navbar collapseOnSelect bg="light" variant="light" expand="md">
        <Navbar.Brand href="/">Work Easy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
      
        {location.pathname === "/preemployment" ? (
          <Nav>
            <Nav.Link href="/employeelogin">Logout</Nav.Link>
          </Nav>
        ) : (
          <Nav>
            
              <Nav.Link href="/employeelogin">Login</Nav.Link>

              <Nav.Link href="/employeeregister">Apply</Nav.Link>

          </Nav>
        )}
      </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default PreEmpNav;
