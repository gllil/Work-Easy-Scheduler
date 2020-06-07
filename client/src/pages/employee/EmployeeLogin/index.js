import React, { useState } from "react";
import { Button, Container, Form, Col, Row } from "react-bootstrap";
import PreEmpNav from "../../../components/PreEmpNav";

function EmployeeLogin() {
  const [ empLogin, setEmpLogin ] = useState({});

  function handleChange(e) {
    const { controlId, value } = e.target;
    setEmpLogin({ empLogin, [controlId]: value })
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Container fluid>
        <PreEmpNav />
      </Container>
      <Container>
        <Row>
          <Col className="text-center">
            <h3>Employee Login</h3>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="adminEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="email"
              type="email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="adminPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="password"
              type="password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default EmployeeLogin;