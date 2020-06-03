import React, { useState } from "react";
import EmployeeNav from "../../../components/EmployeeNav";
import { Container, Col, Row, Form, Button, Table } from "react-bootstrap";

function TimeOff() {
  const [timeOffForm, setTimeOffForm] = useState({});

  function handleInputChange(event) {
    const { dataset, value } = event.target;

    setTimeOffForm({ ...timeOffForm, [dataset.property]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <EmployeeNav />
      <Container>
        <Row>
          <Col className="text-center">
            <h3>Time Off Request</h3>
          </Col>
        </Row>
        <Form onChange={handleInputChange} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" data-property="date" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Start Time</Form.Label>
              <Form.Control type="time" data-property="start-time" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>End Time</Form.Label>
              <Form.Control type="time" data-property="end-time" />
            </Form.Group>
          </Form.Row>
          <Button type="submit">Send Request</Button>
        </Form>
        <Table>
          <thead>
            <tr>
              <th>Request Status</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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

export default TimeOff;
