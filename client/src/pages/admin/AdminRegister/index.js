import React, { useState } from "react";
import HomeNav from "../../../components/HomeNav";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import API from "../../../utils/API";

function AdminRegister() {
  const [adminForm, setAdminForm] = useState({});

  function handleChange(e) {
    const { dataset, value } = e.target;
    setAdminForm({ ...adminForm, [dataset.property]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const storeAdminInfo = {
      nameofCompany: adminForm.company,
      firstname: adminForm.firstname,
      lastname: adminForm.lastname,
      email: adminForm.email,
      phone: adminForm.phone,
      password: adminForm.password,
      address1: adminForm.address1,
      address2: adminForm.address2,
      city: adminForm.city,
      state: adminForm.state,
      zipCode: adminForm.zipcode,
    }

    console.log(storeAdminInfo)
    API.addAdmin(storeAdminInfo)
    
  }

  return (
    <div>
      <Container fluid>
        <HomeNav />
      </Container>
      <Container>
      <Row>
          <Col className="text-center">
            <h3>Admin Registration</h3>
          </Col>
        </Row>
        <Form >
          <Form.Group controlId="company">
            <Form.Label>Business/Organization Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Business/Organization Name"
              data-property="company"
              onChange={handleChange}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="First Name"
                  data-property="firstname"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Last Name"
                  data-property="lastname"
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
              data-property="email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="phone"
              placeholder="555-555-5555"
              data-property="phone"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="address1">
            <Form.Label>Address 1</Form.Label>
            <Form.Control onChange={handleChange} data-property="address1" />
          </Form.Group>
          <Form.Group controlId="address2">
            <Form.Label>Address 2 </Form.Label>
            <Form.Control onChange={handleChange} data-property="address2" />
          </Form.Group>
          <Row>
            <Form.Group as={Col} md="6" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" onChange={handleChange} data-property="city" />
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" onChange={handleChange} data-property="state" />
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="zipcode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" onChange={handleChange} data-property="zipcode" />
            </Form.Group>
          </Row>
          <Form.Group  controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={handleChange} data-property="password" />
          </Form.Group>
        </Form>
        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Container>
    </div>
  );
}

export default AdminRegister;
