import React from "react";
import { Container, Nav } from "react-bootstrap"

function EmployeeNav() {
  return(
      <Container fluid>
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/employeehome">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/trade">Trade Schedule</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/schedules">Request Time Off</Nav.Link>
                </Nav.Item>
            </Nav>
      </Container>
  )
}

export default EmployeeNav;
