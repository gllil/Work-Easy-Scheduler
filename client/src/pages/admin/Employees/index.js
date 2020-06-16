import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/AdminNav";
import {
  Container,
  Col,
  Row,
  Table,
  Modal,
  Button,
  ListGroup,
  Form,
} from "react-bootstrap";
import API from "../../../utils/API";
import Moment from "moment";
import { Link } from "react-router-dom";

function Employees() {
  const [employees, setEmployees] = useState();
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState();
  const [editForm, setEditForm] = useState({});
  const oneEmployee = employees
    ? employees.filter((res) => res._id === id)
    : "Loading...";

  console.log(oneEmployee[0]);

  useEffect(() => {
    API.getEmployees().then((res) => setEmployees(res.data));
  }, []);

  function handleOpen(e, iden) {
    e.preventDefault();
    setId(iden);
    setShow(true);
  }

  function handleClose() {
    setShow(false);
    setEdit(false);
  }
  function formatPhoneNumber(number) {
    let cleaned = ("" + number).replace(/\D/g, "");
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  }
  function formatSocial(number) {
    let cleaned = ("" + number).replace(/\D/g, "");
    let match = cleaned.match(/^(\d{3})(\d{2})(\d{4})$/);
    if (match) {
      return match[1] + "- " + match[2] + "-" + match[3];
    }
    return null;
  }

  function handleEdit(e) {
    e.preventDefault();
    setEdit(true);
  }

  function updateInfo(e, key) {
    e.preventDefault();

    const updatedInfo = editForm;

    API.updateEmployeeInfo(updatedInfo, key)
      .then(() => {
        setShow(false);
        setEdit(false);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  }

  function handleFormChange(e) {
    const { dataset, value } = e.target;
    console.log(dataset, value);
    setEditForm({ ...editForm, [dataset.property]: value });
  }

  let employeeDetails = oneEmployee[0]
    ? [oneEmployee[0]].map((res) => {
        const name = `${res.firstname} ${res.lastname}`;
        return (
          <div>
            <Modal.Header>
              <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Phone: </strong>
                  {formatPhoneNumber(res.phone)}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Email: </strong>
                  {res.email}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>Address: </strong>
                      {res.address1}
                    </Col>
                  </Row>
                  {res.address2 ? (
                    <Row>
                      <Col>
                        <strong>Address 2: </strong>
                        {res.address2}
                      </Col>
                    </Row>
                  ) : null}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>City: </strong>
                      {res.city}
                    </Col>
                    <Col>
                      <strong>State: </strong>
                      {res.state}
                    </Col>
                    <Col>
                      <strong>Zip: </strong>
                      {res.zipCode}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>DOB: </strong>
                      {Moment(res.dob).format("MM/DD/YYYY")}
                    </Col>
                    <Col>
                      <strong>SSN: </strong>
                      {formatSocial(res.ssn)}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Status: </strong>
                  {res.employeeStatus}
                </ListGroup.Item>
              </ListGroup>
            </Modal.Body>
          </div>
        );
      })
    : "Loading...";
  let employeeEditDetails = oneEmployee[0]
    ? [oneEmployee[0]].map((res) => {
        const name = `${res.firstname} ${res.lastname}`;
        return (
          <div>
            <Modal.Header>
              <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    defaultValue={res.firstname}
                    type="text"
                    data-property="firstname"
                    onChange={(e) => handleFormChange(e)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    defaultValue={res.lastname}
                    type="text"
                    data-property="lastname"
                    onChange={(e) => handleFormChange(e)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    defaultValue={formatPhoneNumber(res.phone)}
                    type="text"
                    data-property="phone"
                    onChange={(e) => handleFormChange(e)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    defaultValue={res.email}
                    type="email"
                    data-property="email"
                    onChange={(e) => handleFormChange(e)}
                  />
                </Form.Group>
              </Row>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  defaultValue={res.address1}
                  type="text"
                  data-property="address1"
                  onChange={(e) => handleFormChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  defaultValue={res.address2}
                  type="text"
                  data-property="address2"
                  onChange={(e) => handleFormChange(e)}
                />
              </Form.Group>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    defaultValue={res.city}
                    type="text"
                    data-property="city"
                    onChange={(e) => handleFormChange(e)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    defaultValue={res.state}
                    type="text"
                    data-property="state"
                    onChange={(e) => handleFormChange(e)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                    defaultValue={res.zipCode}
                    type="text"
                    data-property="zipCode"
                    onChange={(e) => handleFormChange(e)}
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>DOB</Form.Label>
                  <Form.Control
                    defaultValue={Moment(res.dob).format("MM/DD/YYYY")}
                    type="text"
                    data-property="dob"
                    onChange={(e) => handleFormChange(e)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>SSN</Form.Label>
                  <Form.Control
                    defaultValue={formatSocial(res.ssn)}
                    type="text"
                    data-property="ssn"
                    onChange={(e) => handleFormChange(e)}
                  />
                </Form.Group>
              </Row>
              <Button variant="primary" onClick={(e) => updateInfo(e, res._id)}>
                Update
              </Button>
            </Modal.Body>
          </div>
        );
      })
    : "Loading...";

  return (
    <div>
      <AdminNav />
      <Container>
        <Row>
          <Col className="text-center">
            <h3>Employees</h3>
          </Col>
        </Row>
        <Table className="text-center">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Start Date</th>
              <th>Employment Status</th>
              <th>Position</th>
              <th>D.O.B.</th>
            </tr>
          </thead>
          <tbody>
            {employees
              ? employees.map((emp, i) => (
                  <tr key={i}>
                    <td>
                      <Link onClick={(e) => handleOpen(e, emp._id)}>
                        {emp.firstname} {emp.lastname}
                      </Link>
                    </td>
                    <td>{Moment(emp.adminDate).format("MM/DD/YYYY")}</td>
                    <td>{emp.employeeStatus}</td>
                    <td>Position</td>
                    <td>{Moment(emp.dob).format("MM/DD/YYYY")}</td>
                  </tr>
                ))
              : "Loading..."}
          </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
          {edit ? employeeEditDetails : employeeDetails}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {edit ? null : (
              <Button variant="primary" onClick={(e) => handleEdit(e)}>
                Edit
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Employees;
