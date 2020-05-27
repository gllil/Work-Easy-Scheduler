import React from "react";
import { Container, Nav } from "react-bootstrap"

function AdminNav() {
  return(
      <Container fluid>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/adminhome">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/employees">Manage Employees</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/schedules">Manage Schedules</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/hiring">Recruiting</Nav.Link>
                </Nav.Item>
            </Nav>
      </Container>
  )
}

export default AdminNav;