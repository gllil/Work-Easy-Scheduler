import React, { setState} from "react";
import PreEmpNav from "../../../components/PreEmpNav";
import { Container, Form, Col } from "react-bootstrap";

function EmployeeRegister() {



  return (
    <div>
      <PreEmpNav />
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} md="5" controlId="info">
              <Form.Label>First Name</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="info">
              <Form.Label>M.I.</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="info">
              <Form.Label>Last Name</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} md={{ span: 4, offset: 2 }}>
              <Form.Label>Social Security</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
          <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control />
          </Form.Group>
          <Form.Group controlId="street-address1">
            <Form.Label>Address 1</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group controlId="street-address2">
            <Form.Label>Address 2 </Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="zip-code">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>
        </Form>
      </Container>
    </div>
  );
}

export default EmployeeRegister;
