import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import EmployeeNav from "../../../components/EmployeeNav";
import Profiles from "../../../utils/profiles.json";
import Moment from "moment";

function Trade() {
  const [tradeForm, setTradeForm] = useState({
    requestStatus: "Pending",
  });

  const [list, setList] = useState([]);

  function handleInputChange(event) {
    const { dataset } = event.target;
    const { value } = event.target;
    console.log(dataset);
    const form = { ...tradeForm };
    form[dataset.property] = value;
    setTradeForm(form);
  }
  function handelMultiSelectChange(event) {
    const { dataset } = event.target;
    const value = event.target.options[event.target.selectedIndex].value;

    setTradeForm({ ...tradeForm, [dataset.property]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // setList({...list, list: [tradeForm]});
    // console.log(list)
    setList()
  }

  Moment.locale("en")

  return (
    <div>
      <EmployeeNav />
      <Container>
        <Row>
          <Col className="text-center">
            <h3>Trade Schedule</h3>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Source Employee</Form.Label>
              <Form.Control
                onChange={handelMultiSelectChange}
                as="select"
                data-property="sourceEmployee"
                multiple
              >
                {Profiles.map((res) => {
                  const name = `${res.name.first} ${res.name.last}`;
                  return <option key={name}>{name}</option>;
                })}
                />
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Target Employee</Form.Label>
              <Form.Control
                onChange={handelMultiSelectChange}
                as="select"
                data-property="targetEmployee"
                multiple
              >
                {Profiles.map((res) => {
                  const name = `${res.name.first} ${res.name.last}`;
                  return <option key={name}>{name}</option>;
                })}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                onChange={handleInputChange}
                data-property="date"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="time"
                onChange={handleInputChange}
                data-property="startTime"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Stop Time</Form.Label>
              <Form.Control
                type="time"
                onChange={handleInputChange}
                data-property="stopTime"
              />
            </Form.Group>
          </Form.Row>
          <Button type="submit">Submit Trade Request</Button>
        </Form>
        <Table responsive>
          <thead>
            <tr>
              <th>Request Status</th>
              <th>Source Employee</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Target Employee</th>
            </tr>
          </thead>
          <tbody>
            {[list].map((res) => {
              return (
                <tr>
                  <td>{res.requestStatus}</td>
                  <td>{res.sourceEmployee}</td>
                  <td>{res.date}</td>
                  <td>{res.startTime}</td>
                  <td>{res.stopTime}</td>
                  <td>{res.targetEmployee}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Trade;
