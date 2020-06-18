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
  const [positions, setPositions] = useState();
  const [form, setForm] = useState({
    employeeStatus: "",
    position: "",
  });
  const [id, setId] = useState();

  const handleClose = () => setShow(false);

  useEffect(() => {
    API.getEmployees().then((res) => setEmployees(res.data));
    API.getPositions().then((res) => setPositions(res.data));
  }, []);

  function formatPhoneNumber(number) {
    let cleaned = ("" + number).replace(/\D/g, "");
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  }

  function handleReview(e) {
    e.preventDefault();
    setShow(true);
  }
  console.log(id);

  function handleModalChange(e) {
    const { dataset, value } = e.target;
    console.log(dataset, value);

    setForm({ ...form, [dataset.property]: value });
  }

  function handleSave(e) {
    e.preventDefault();

    const newInfo = {
      employeeStatus: form.employeeStatus,
      position: form.position,
    };
    const key = id;
    console.log(newInfo);

    API.updateEmployeeInfo(newInfo, key)
      .then((res) => {
        console.log(res);
        console.log(key);
        setShow(false);
        // window.location.reload(false);
      })
      .catch((err) => console.log(err));
  }

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
                <Accordion key={res._id}>
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
                            <div key={result._id}>
                              <Row>
                                <Col>
                                  <strong>Employer: </strong>
                                  {result.employer}
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <strong>Description: </strong>
                                  {result.jobDescription}
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <strong>Start Date: </strong>
                                  {Moment(result.startDate).format(
                                    "MM/DD/YYYY"
                                  )}
                                </Col>
                                <Col>
                                  <strong>End Date: </strong>
                                  {Moment(result.endDate).format("MM/DD/YYYY")}
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <strong>Manager: </strong> {result.mgrName}
                                </Col>
                                <Col>
                                  <strong>Manager Phone: </strong>{" "}
                                  {formatPhoneNumber(result.mgrPhone)}
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <strong>Reason for Leaving: </strong>{" "}
                                  {result.leaveReason}
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <strong>Currently Employed: </strong>
                                  {result.currentlyEmployed ? "Yes" : "No"}
                                </Col>
                              </Row>
                              <Button
                                variant="primary"
                                onClick={(e) => {
                                  handleReview(e);
                                  setId(result._id);
                                }}
                              >
                                Review
                              </Button>
                            </div>
                          );
                        })}

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Resume Review</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form onChange={(e) => handleModalChange(e)}>
                              <Row>
                                <Col>
                                  <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Label>
                                      Change Employment Status
                                    </Form.Label>
                                    <Form.Control
                                      data-property="employeeStatus"
                                      as="select"
                                      multiple
                                    >
                                      <option>recruit</option>
                                      <option>employed</option>
                                      <option>resigned</option>
                                    </Form.Control>
                                  </Form.Group>
                                </Col>
                                <Col>
                                  <Form.Group controlId="exampleForm.ControlSelect2">
                                    <Form.Label>Position/Role</Form.Label>
                                    <Form.Control
                                      data-property="position"
                                      as="select"
                                      multiple
                                    >
                                      {positions ? (
                                        positions.map((res) => {
                                          return (
                                            <option key={res._id}>
                                              {res.position}
                                            </option>
                                          );
                                        })
                                      ) : (
                                        <option>No Positions Added</option>
                                      )}
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
                            <Button
                              variant="primary"
                              onClick={(e) => handleSave(e)}
                            >
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
