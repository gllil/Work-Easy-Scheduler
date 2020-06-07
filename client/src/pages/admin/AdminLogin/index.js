import React, { useState } from "react";
import HomeNav from "../../../components/HomeNav";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

function AdminLogin() {
  const [adminLogin, setAdminLogin] = useState({});

  function handleChange(e) {
    const { controlId, value } = e.target;
    setAdminLogin({ adminLogin, [controlId]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Container fluid>
        <HomeNav />
      </Container>
      <Container>
        <Row>
          <Col className="text-center">
            <h3>Admin Login</h3>
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

export default AdminLogin;
