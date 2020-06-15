import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/AdminNav";
import { Container, Row, Col, Table, Button, Modal } from "react-bootstrap";
import API from "../../../utils/API";

function AdminHome() {
  const [show, setShow] = useState(false);
  const [schedules, setSchedules] = useState();
  // const [status, setStatus] = useState({
  //   requestStatus: ""
  // })
  useEffect(() => {
    API.getEmployees().then((res) => setSchedules(res.data));
  }, []);

  // const handleApprove = () => {
  //   setShow(false);
  //   setStatus({
  //     requestStatus: "Approved",
  //   });
  // };
  // const handleDecline = () => {
  //   setShow(false);
  //   setStatus({
  //     requestStatus: "Declined",
  //   });
  // };
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  return (
    <div>
      <AdminNav />
      <Container fluid>
        <Row>
          <Col md={{ span: 4, offset: 4 }} className="text-center">
            <h3>Current Schedules</h3>
          </Col>
        </Row>
        <Table responsive size="sm">
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
            {schedules
              ? schedules.map((res) => {
                  const name = `${res.firstname} ${res.lastname}`;
                  return (
                    <tr>
                      <td>
                        <strong>{name}</strong>
                      </td>
                      <td>
                        {res.schedule.Sunday.timeStart &&
                        res.schedule.Sunday.timeStop
                          ? `${res.schedule.Sunday.timeStart} - ${res.schedule.Sunday.timeStop}`
                          : "No Schedule"}
                      </td>
                      <td>
                        {res.schedule.Monday.timeStart &&
                        res.schedule.Monday.timeStop
                          ? `${res.schedule.Monday.timeStart} -  ${res.schedule.Monday.timeStop}`
                          : "No Schedule"}
                      </td>
                      <td>
                        {res.schedule.Tuesday.timeStart &&
                        res.schedule.Tuesday.timeStop
                          ? `${res.schedule.Tuesday.timeStart} - ${res.schedule.Tuesday.timeStop}`
                          : "No Schedule"}
                      </td>
                      <td>
                        {res.schedule.Wednesday.timeStart &&
                        res.schedule.Wednesday.timeStop
                          ? `${res.schedule.Wednesday.timeStart} - ${res.schedule.Wednesday.timeStop}`
                          : "No Schedule"}
                      </td>
                      <td>
                        {res.schedule.Thursday.timeStart &&
                        res.schedule.Thursday.timeStop
                          ? `${res.schedule.Thursday.timeStart} - ${res.schedule.Thursday.timeStop}`
                          : "No Schedule"}
                      </td>
                      <td>
                        {res.schedule.Friday.timeStart &&
                        res.schedule.Friday.timeStop
                          ? `${res.schedule.Friday.timeStart} - ${res.schedule.Friday.timeStop}`
                          : "No Schedule"}
                      </td>
                      <td>
                        {res.schedule.Saturday.timeStart &&
                        res.schedule.Saturday.timeStop
                          ? `${res.schedule.Saturday.timeStart} - ${res.schedule.Saturday.timeStop}`
                          : "No Schedule"}
                      </td>
                    </tr>
                  );
                })
              : "Loading..."}
          </tbody>
        </Table>
        {/* <Row>
          <Col md={{ span: 4, offset: 4 }} className="text-center">
            <h3>Time Off Request</h3>
          </Col>
        </Row>
        <Table>
          <thead>
            <tr>
              <th>Request Status</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="center">
                <Button variant="secondary" size="sm" onClick={handleShow}>
                  Review
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Review Request</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Would you like to approve this request?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleApprove}>
                      Approve
                    </Button>
                    <Button variant="primary" onClick={handleDecline}>
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>
          </tbody>
        </Table> */}
      </Container>
    </div>
  );
}

export default AdminHome;
