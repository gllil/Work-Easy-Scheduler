import React from "react";
import { Container, Nav } from "react-bootstrap"

function HomeNav() {
    return(
        <Container fluid>
        <Nav>
            <Nav.Item>
                <Nav.Link href="/adminlogin">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/adminregister">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/employeelogin">Employee Login</Nav.Link>
            </Nav.Item>
        </Nav>
  </Container>
    )
}

export default HomeNav;