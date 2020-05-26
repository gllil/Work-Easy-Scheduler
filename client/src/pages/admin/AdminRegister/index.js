import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";

function AdminRegister() {
    return(
        <Container>
            <Form>
            <Form.Group  controlId="company">
                <Form.Label>Business/Organization Name</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Row>
            <Col>
            <Form.Group controlId="first-name">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="name" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="last-name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="name" />
            </Form.Group>
            </Col>
            </Row>
            <Form.Group  controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"/>
            </Form.Group>
            <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="phone"/>
            </Form.Group>
            <Form.Group controlId="street-address1">
                <Form.Label>Address 1</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group controlId="street-address2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control />
            </Form.Group>
            <Row>
            <Col>
            <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group controlId="zip-code">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            </Col>
            </Row>
            <Form.Group controlId="admin-password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"/>
            </Form.Group>
            </Form>
            <Button>Submit</Button>
        </Container>
    )
}

export default AdminRegister;