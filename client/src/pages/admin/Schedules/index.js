import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/AdminNav";

import {
  Container,
  Col,
  Row,
  Table,
  Form,
  Modal,
  Button,
} from "react-bootstrap";
import API from "../../../utils/API";
import "./style.css";

function Schedules() {
  const [show, setShow] = useState(false);
  const [employees, setEmployees] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalForm, setModalForm] = useState();
  const [schedules, setSchedules] = useState();

  useEffect(() => {
    API.getEmployees().then((res) => setEmployees(res.data));
    API.getSchedules().then((res) => setSchedules(res.data));
  }, []);

  function handleModalForm(e) {
    const { dataset, value } = e.target;
    console.log(dataset, value);
    setModalForm({ ...modalForm, [dataset.property]: value });
  }

  function addSchedule(e) {
    e.preventDefault();

    const newSchedule = {
      name: modalForm.employee,
      weekday: modalForm.weekday,
      timeStart: modalForm.timeStart,
      timeStop: modalForm.timeStop,
    };

    API.addSchedule(newSchedule)
      .then(() => {
        setShow(false);
        setModalForm([]);
      })
      .catch((err) => console.log(err));
    setModalForm([]);

    setShow(false);
  }

  return (
    <div>
      <AdminNav />
      <Container fluid>
        <Row>
          <Col className="text-center">
            <h3>Schedules</h3>
          </Col>
        </Row>

        <Modal
          show={show}
          className="justify-content-center"
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>New Schedule</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onChange={(e) => handleModalForm(e)}>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>Select Employee</Form.Label>
                  <Form.Control as="select" data-property="employee" multiple>
                    {employees
                      ? employees.map((res, i) => {
                          const name = `${res.firstname} ${res.lastname}`;
                          return <option key={i}>{name}</option>;
                        })
                      : "Loading..."}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} id="weekday">
                  <Form.Label>Select Weekday</Form.Label>
                  <Form.Control as="select" data-property="weekday">
                    <option>Select</option>
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </Form.Control>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>Start Time</Form.Label>
                  <Form.Control data-property="timeStart" type="time" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>End Time</Form.Label>
                  <Form.Control data-property="timeStop" type="time" />
                </Form.Group>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={(e) => addSchedule(e)}>
              AddSchedule
            </Button>
          </Modal.Footer>
        </Modal>
        <Row>
          <Col md="4">
            <Form.Group>
              <Form.Label>Select Employee</Form.Label>
              <Form.Control as="select">
                <option>All Employees</option>
                {employees
                  ? employees.map((res, i) => {
                      const name = `${res.firstname} ${res.lastname}`;
                      return <option key={i}>{name}</option>;
                    })
                  : "Loading..."}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={{ span: 3, offset: 5 }}>
            <Button variant="primary" onClick={handleShow}>
              Add New Schedule
            </Button>
          </Col>
        </Row>
        <Table responsive className="text-center">
          <thead>
            <tr>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>

          {schedules
            ? schedules.map((res) => {
                const name = res.name;
                // let filteredNames = res.filter(
                //   (result) => result.name === name
                // );
                return (
                  <tbody key={res._id}>
                    <tr>
                      <td colSpan="7">
                        <strong>{name}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {res.weekday === "Sunday"
                          ? `${res.timeStart} ${res.timeStop}`
                          : "No Schedule"}
                      </td>
                      <td>
                        {res.weekday === "Monday"
                          ? `${res.timeStart} ${res.timeStop}`
                          : "No Schedule"}
                      </td>
                      <td>
                        {res.weekday === "Tuesday"
                          ? `${res.timeStart} ${res.timeStop}`
                          : "No Schedule"}
                      </td>
                      <td>
                        {res.weekday === "Wednesday"
                          ? `${res.timeStart} ${res.timeStop}`
                          : "No Schedule"}
                      </td>
                      <td>
                        {res.weekday === "Thursday"
                          ? `${res.timeStart} ${res.timeStop}`
                          : "No Schedule"}
                      </td>
                      <td>
                        {res.weekday === "Friday"
                          ? `${res.timeStart} ${res.timeStop}`
                          : "No Schedule"}
                      </td>
                      <td>
                        {res.weekday === "Saturday"
                          ? `${res.timeStart} ${res.timeStop}`
                          : "No Schedule"}
                      </td>
                    </tr>
                  </tbody>
                );
              })
            : "Loading..."}
        </Table>
      </Container>
    </div>
  );
}

export default Schedules;
