import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function EmployeeNav() {
  return (
    <Container fluid>
      <Navbar collapseOnSelect bg="light" variant="light" expand="md">
        <Navbar.Brand href="/employeehome">Work Easy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/trade">Trade Schedule</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/timeoff">Request Time Off</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/employeeLogin">Logout</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default EmployeeNav;
