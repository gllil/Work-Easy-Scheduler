import React, { useState } from "react";
import AdminNav from "../../../components/AdminNav";
import { Container, Row, Col, Table, Button, Modal } from "react-bootstrap";

function AdminHome() {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState({
    requestStatus: ""
  })

  const handleApprove = () => {
    setShow(false);
    setStatus({
      requestStatus: "Approved"
    })
  }
  const handleDecline = () => {
    setShow(false);
    setStatus({
      requestStatus: "Declined"
    })
  }
  const handleClose = () => {
    setShow(false);

  }
  const handleShow = () => {
    setShow(true);
  }

  return (
    <div>
      <AdminNav />
      <Container fluid>
        <Row>
          <Col md={{ span: 4, offset: 4 }} className="text-center">
            <h3>Current Schedules</h3>
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
        <Row>
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
        </Table>
      </Container>
    </div>
  );
}

export default AdminHome;
