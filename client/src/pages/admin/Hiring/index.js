import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/AdminNav";
import API from "../../../utils/API";
import Moment from "moment";
import {
  Container,
  Col,
  Row,
  Accordion,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";

function Hiring() {
  const [show, setShow] = useState(false);
  const [employees, setEmployees] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    API.getEmployees().then((res) => setEmployees(res.data));
  }, []);

  return (
    <div>
      <AdminNav />
      <Container>
        <Row>
          <Col className="text-center">
            <h3>Employee Applications</h3>
          </Col>
        </Row>
        {employees
          ? employees.map((res) => {
              return (
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                        {res.firstname} {res.lastname}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        {res.employers.map((result) => {
                          return (
                            <div>
                              <Row>
                                <Col>Employer: {result.employer}</Col>
                              </Row>
                              <Row>
                                <Col>Description {result.jobDescription}</Col>
                              </Row>
                              <Row>
                                <Col>
                                  Start Date:
                                  {Moment(result.startDate).format(
                                    "MM/DD/YYYY"
                                  )}
                                </Col>
                                <Col>
                                  End Date:
                                  {Moment(result.endDate).format("MM/DD/YYYY")}
                                </Col>
                              </Row>
                              <Row>
                                <Col>Manager: {result.mgrName}</Col>
                                <Col>Manager Phone: {result.mgrPhone}</Col>
                              </Row>
                              <Row>
                                <Col>
                                  Reason for Leaving: {result.leaveReason}
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  Currently Employed:{" "}
                                  {result.leaveReason ? "Yes" : "No"}
                                </Col>
                              </Row>
                            </div>
                          );
                        })}
                        <Button variant="primary" onClick={handleShow}>
                          Review
                        </Button>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Resume Review</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Row>
                                <Col>
                                  <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Label>
                                      Change Employment Status
                                    </Form.Label>
                                    <Form.Control as="select" multiple>
                                      <option>Active</option>
                                      <option>Archive</option>
                                    </Form.Control>
                                  </Form.Group>
                                </Col>
                                <Col>
                                  <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Label>Position</Form.Label>
                                    <Form.Control as="select" multiple>
                                      <option>No Position</option>
                                      <option>Customer Service</option>
                                      <option>Engineer</option>
                                      <option>Manager</option>
                                      <option>Supervisor</option>
                                    </Form.Control>
                                  </Form.Group>
                                </Col>
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
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              );
            })
          : "Loading..."}
        {/* <Row>
          <Col className="text-center">
            <h3>Hired Employees</h3>
          </Col>
        </Row>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Employee Name
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Resume</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion> */}
        {/* <Row>
          <Col className="text-center">
            <h3>Archived Applications</h3>
          </Col>
        </Row>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Employee Name
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Resume</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion> */}
      </Container>
    </div>
  );
}

export default Hiring;
