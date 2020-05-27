import React, { useState } from "react";
import HomeNav from "../../../components/HomeNav";
import { Form, Button, Container, Col, Row } from "react-bootstrap";

function AdminRegister() {
  const [adminForm, setAdminForm] = useState({});

  function handleChange(e) {
    const { controlId, value } = e.target;
    setAdminForm({ adminForm, [controlId]: value });
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
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="company">
            <Form.Label>Business/Organization Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Business/Organization Name"
              onChange={handleChange}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group controlId="first-name">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="First Name"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="last-name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@example.com"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="phone"
              placeholder="555-555-5555"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="street-address1">
            <Form.Label>Address 1</Form.Label>
            <Form.Control onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="street-address2">
            <Form.Label>Address 2 </Form.Label>
            <Form.Control onChange={handleChange} />
          </Form.Group>
          <Row>
            <Form.Group as={Col} md="6" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="zip-code">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" onChange={handleChange} />
            </Form.Group>
          </Row>
          <Form.Group controlId="admin-password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={handleChange} />
          </Form.Group>
        </Form>
        <Button type="submit">Submit</Button>
      </Container>
    </div>
  );
}

export default AdminRegister;
