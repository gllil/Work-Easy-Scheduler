import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function AdminNav() {
  return (
    <Container fluid>
      <Navbar collapseOnSelect bg="light" variant="light" expand="md">
        <Navbar.Brand href="/adminhome">Work Easy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav >
            <Nav.Item>
              <Nav.Link href="/employees">Manage Employees</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/schedules">Manage Schedules</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/hiring">Recruiting</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Logout</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default AdminNav;
