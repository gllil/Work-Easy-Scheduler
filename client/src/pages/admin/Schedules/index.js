import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/AdminNav";

import { Container, Col, Row, Table, Form, Button } from "react-bootstrap";
import API from "../../../utils/API";
import "./style.css";

function Schedules() {
  const [showEdit, setShowEdit] = useState(false);
  const [employees, setEmployees] = useState();

  const [modalForm, setModalForm] = useState({
    sundayStart: "",
    sundayStop: "",
    mondayStart: "",
    mondayStop: "",
    tuesdayStart: "",
    tuesdayStop: "",
    wednesdayStart: "",
    wednesdayStop: "",
    thursdayStart: "",
    thursdayStop: "",
    fridayStart: "",
    fridayStop: "",
    saturdayStart: "",
    saturdayStop: "",
  });

  useEffect(() => {
    API.getEmployees().then((res) => setEmployees(res.data));
  }, []);
  console.log(modalForm);

  function handleModalForm(e) {
    const { dataset, value } = e.target;
    console.log(dataset, value);
    setModalForm({ ...modalForm, [dataset.property]: value });
  }

  function updateSchedule(e, key) {
    const filterEmp = employees.filter((emp) => emp._id === key);
    console.log(filterEmp[0]);
    console.log(
      modalForm.sundayStart
        ? modalForm.sundayStart
        : filterEmp[0].schedule.Sunday.timeStart
    );
    e.preventDefault();
    console.log(key);
    const newSchedule = {
      schedule: {
        Sunday: {
          timeStart:
            modalForm.sundayStart !== ""
              ? modalForm.sundayStart
              : filterEmp[0].schedule.Sunday.timeStart,

          timeStop:
            modalForm.sundayStop !== ""
              ? modalForm.sundayStop
              : filterEmp[0].schedule.Sunday.timeStop,
        },
        Monday: {
          timeStart:
            modalForm.mondayStart !== ""
              ? modalForm.mondayStart
              : filterEmp[0].schedule.Monday.timeStart,

          timeStop:
            modalForm.mondayStop !== ""
              ? modalForm.mondayStop
              : filterEmp[0].schedule.Monday.timeStop,
        },
        Tuesday: {
          timeStart:
            modalForm.tuesdayStart !== ""
              ? modalForm.tuesdayStart
              : filterEmp[0].schedule.Tuesday.timeStart,

          timeStop:
            modalForm.tuesdayStop !== ""
              ? modalForm.tuesdayStop
              : filterEmp[0].schedule.Tuesday.timeStop,
        },
        Wednesday: {
          timeStart:
            modalForm.wednesdayStart !== ""
              ? modalForm.wednesdayStart
              : filterEmp[0].schedule.Wednesday.timeStart,

          timeStop:
            modalForm.wednesdayStop !== ""
              ? modalForm.wednesdayStop
              : filterEmp[0].schedule.Wednesday.timeStop,
        },
        Thursday: {
          timeStart:
            modalForm.thursdayStart !== ""
              ? modalForm.thursdayStart
              : filterEmp[0].schedule.Thursday.timeStart,

          timeStop:
            modalForm.thursdayStop !== ""
              ? modalForm.thursdayStop
              : filterEmp[0].schedule.Thursday.timeStop,
        },
        Friday: {
          timeStart:
            modalForm.fridayStart !== ""
              ? modalForm.fridayStart
              : filterEmp[0].schedule.Friday.timeStart,

          timeStop:
            modalForm.fridayStop !== ""
              ? modalForm.fridayStop
              : filterEmp[0].schedule.Friday.timeStop,
        },
        Saturday: {
          timeStart:
            modalForm.saturdayStart !== ""
              ? modalForm.saturdayStart
              : filterEmp[0].schedule.Saturday.timeStart,

          timeStop:
            modalForm.saturdayStop !== ""
              ? modalForm.saturdayStop
              : filterEmp[0].schedule.Saturday.timeStop,
        },
      },
    };

    console.log(newSchedule);

    API.updateEmployeeInfo(newSchedule, key)
      .then(() => {
        setShowEdit(false);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  }

  function clearSchedule(e, key) {
    e.preventDefault();
    console.log(key);
    const newSchedule = {
      schedule: {
        Sunday: {
          timeStart: "",
          timeStop: "",
        },
        Monday: {
          timeStart: "",
          timeStop: "",
        },
        Tuesday: {
          timeStart: "",
          timeStop: "",
        },
        Wednesday: {
          timeStart: "",
          timeStop: "",
        },
        Thursday: {
          timeStart: "",
          timeStop: "",
        },
        Friday: {
          timeStart: "",
          timeStop: "",
        },
        Saturday: {
          timeStart: "",
          timeStop: "",
        },
      },
    };

    console.log(newSchedule);

    API.updateEmployeeInfo(newSchedule, key)
      .then(() => {
        setShowEdit(false);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  }

  let employeesEditRender;
  let employeesRender;

  if (employees) {
    employeesEditRender = employees.map((res) => {
      const name = `${res.firstname} ${res.lastname}`;
      return (
        <tr onChange={(e) => handleModalForm(e)}>
          <td>
            <strong>{name}</strong>
            <Button onClick={(e) => updateSchedule(e, res._id)}>Update</Button>
            <Button variant="danger" onClick={(e) => clearSchedule(e, res._id)}>
              Clear
            </Button>
          </td>
          <td>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  data-property="sundayStart"
                  type="time"
                  defaultValue={res.schedule.Sunday.timeStart}
                  onLoadCapture={(e) => handleModalForm(e)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  data-property="sundayStop"
                  type="time"
                  defaultValue={res.schedule.Sunday.timeStop}
                  onLoadCapture={(e) => handleModalForm(e)}
                />
              </Form.Group>
            </Row>
          </td>
          <td>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  data-property="mondayStart"
                  type="time"
                  defaultValue={res.schedule.Monday.timeStart}
                  onLoadCapture={(e) => handleModalForm(e)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  data-property="mondayStop"
                  type="time"
                  defaultValue={res.schedule.Monday.timeStop}
                  onLoadCapture={(e) => handleModalForm(e)}
                />
              </Form.Group>
            </Row>
          </td>
          <td>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  data-property="tuesdayStart"
                  type="time"
                  defaultValue={res.schedule.Tuesday.timeStart}
                  onLoadedDataCapture={(e) => handleModalForm(e)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  data-property="tuesdayStop"
                  type="time"
                  defaultValue={res.schedule.Tuesday.timeStop}
                  onLoadedDataCapture={(e) => handleModalForm(e)}
                />
              </Form.Group>
            </Row>
          </td>
          <td>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  data-property="wednesdayStart"
                  type="time"
                  defaultValue={res.schedule.Wednesday.timeStart}
                  onLoadedDataCapture={(e) => handleModalForm(e)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  data-property="wednesdayStop"
                  type="time"
                  defaultValue={res.schedule.Wednesday.timeStop}
                  onLoad={(e) => handleModalForm(e)}
                />
              </Form.Group>
            </Row>
          </td>
          <td>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  data-property="thursdayStart"
                  type="time"
                  defaultValue={res.schedule.Thursday.timeStart}
                  onLoad={(e) => handleModalForm(e)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  data-property="thursdayStop"
                  type="time"
                  defaultValue={res.schedule.Thursday.timeStop}
                  onLoad={(e) => handleModalForm(e)}
                />
              </Form.Group>
            </Row>
          </td>
          <td>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  data-property="fridayStart"
                  type="time"
                  defaultValue={res.schedule.Friday.timeStart}
                  onLoad={(e) => handleModalForm(e)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  data-property="fridayStop"
                  type="time"
                  defaultValue={res.schedule.Friday.timeStop}
                  onLoad={(e) => handleModalForm(e)}
                />
              </Form.Group>
            </Row>
          </td>
          <td>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  data-property="saturdayStart"
                  type="time"
                  defaultValue={res.schedule.Saturday.timeStart}
                  onLoad={(e) => handleModalForm(e)}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  data-property="saturdayStop"
                  type="time"
                  defaultValue={res.schedule.Saturday.timeStop}
                  onLoad={(e) => handleModalForm(e)}
                />
              </Form.Group>
            </Row>
          </td>
        </tr>
      );
    });
  }

  if (employees) {
    employeesRender = employees.map((res) => {
      const name = `${res.firstname} ${res.lastname}`;
      return (
        <tr>
          <td>
            <strong>{name}</strong>
          </td>
          <td>
            {res.schedule.Sunday.timeStart && res.schedule.Sunday.timeStop
              ? `${res.schedule.Sunday.timeStart} - ${res.schedule.Sunday.timeStop}`
              : "No Schedule"}
          </td>
          <td>
            {res.schedule.Monday.timeStart && res.schedule.Monday.timeStop
              ? `${res.schedule.Monday.timeStart} -  ${res.schedule.Monday.timeStop}`
              : "No Schedule"}
          </td>
          <td>
            {res.schedule.Tuesday.timeStart && res.schedule.Tuesday.timeStop
              ? `${res.schedule.Tuesday.timeStart} - ${res.schedule.Tuesday.timeStop}`
              : "No Schedule"}
          </td>
          <td>
            {res.schedule.Wednesday.timeStart && res.schedule.Wednesday.timeStop
              ? `${res.schedule.Wednesday.timeStart} - ${res.schedule.Wednesday.timeStop}`
              : "No Schedule"}
          </td>
          <td>
            {res.schedule.Thursday.timeStart && res.schedule.Thursday.timeStop
              ? `${res.schedule.Thursday.timeStart} - ${res.schedule.Thursday.timeStop}`
              : "No Schedule"}
          </td>
          <td>
            {res.schedule.Friday.timeStart && res.schedule.Friday.timeStop
              ? `${res.schedule.Friday.timeStart} - ${res.schedule.Friday.timeStop}`
              : "No Schedule"}
          </td>
          <td>
            {res.schedule.Saturday.timeStart && res.schedule.Saturday.timeStop
              ? `${res.schedule.Saturday.timeStart} - ${res.schedule.Saturday.timeStop}`
              : "No Schedule"}
          </td>
        </tr>
      );
    });
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

        <Row className="text-right">
          <Col>
            {showEdit ? (
              <Button variant="primary" onClick={() => setShowEdit(false)}>
                Cancel
              </Button>
            ) : (
              <Button variant="primary" onClick={() => setShowEdit(true)}>
                Edit Schedules
              </Button>
            )}
          </Col>
        </Row>
        <Table responsive className="text-center">
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
          <tbody>{showEdit ? [employeesEditRender] : [employeesRender]}</tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Schedules;
