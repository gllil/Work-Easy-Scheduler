import React, { useState } from "react";
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
import Profiles from "../../../utils/profiles.json";
import "./style.css";

function Schedules() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <AdminNav />
      <Container fluid>
        <Row>
          <Col className="text-center">
            <h3>Schedules</h3>
          </Col>
        </Row>

        <Modal show={show} className="justify-content-center" onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Schedule</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                  <Form.Group>
                    <Form.Label>Select Employee</Form.Label>
                    <Form.Control as="select" multiple>
                      {Profiles.map((res) => {
                        const name = `${res.name.first} ${res.name.last}`;
                        return <option>{name}</option>;
                      })}
                    </Form.Control>
                  </Form.Group>
                </Row>
                  <Row>
                      <h6>Select Days Working</h6> 
                      </Row>
                      <Row>
                      <Form.Group id="sunday">
                        <Form.Check inline type="checkbox" label="Sunday" />
                      </Form.Group>
                      <Form.Group id="monday">
                        <Form.Check inline type="checkbox" label="Monday" />
                      </Form.Group>
                      <Form.Group id="tuesday">
                        <Form.Check inline type="checkbox" label="Tuesday" />
                      </Form.Group>
                      <Form.Group id="wednesday">
                        <Form.Check inline type="checkbox" label="Wednesday" />
                      </Form.Group>
                      <Form.Group id="thursday">
                        <Form.Check inline type="checkbox" label="Thursday" />
                      </Form.Group>
                      <Form.Group id="friday">
                        <Form.Check inline type="checkbox" label="Friday" />
                      </Form.Group>
                      <Form.Group id="saturday">
                        <Form.Check inline type="checkbox" label="Saturday" />
                      </Form.Group>
                      </Row>
                    <Row>
                      <Form.Group>
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control type="time" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>End Time</Form.Label>
                        <Form.Control type="time" />
                      </Form.Group>
                    
               
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Row>
          <Col md="4">
            <Form.Group>
              <Form.Label>Select Employee</Form.Label>
              <Form.Control as="select">
                <option>All Employees</option>
                {Profiles.map((res) => {
                  const name = `${res.name.first} ${res.name.last}`;
                  return <option>{name}</option>;
                })}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={{ span: 3, offset: 5 }}>
            <Button variant="primary" onClick={handleShow}>
              Add New Schedule
            </Button>
          </Col>
        </Row>
        <Table responsive>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Schedules;
