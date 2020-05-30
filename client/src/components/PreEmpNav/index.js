import React from "react";
import { Container, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function PreEmpNav() {
  const location = useLocation();

  return (
    <Container fluid>
      <Nav>
        {location.pathname === "/preemployment" ? (
          <Nav.Item>
            <Nav.Link href="/employeelogin">Logout</Nav.Link>
          </Nav.Item>
        ) : (
          <div>
            <Nav.Item>
              <Nav.Link href="/employeelogin">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/employeeregister">Apply</Nav.Link>
            </Nav.Item>
          </div>
        )}
      </Nav>
    </Container>
  );
}

export default PreEmpNav;
