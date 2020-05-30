import React from "react";
import { Container, Nav } from "react-bootstrap"

function HomeNav() {
    return(
        <Container fluid>
        <Nav>
            <Nav.Item>
                <Nav.Link href="/adminlogin">Employer Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/adminregister">Employer Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/employeelogin">Employee Login</Nav.Link>
            </Nav.Item>
        </Nav>
  </Container>
    )
}

export default HomeNav;