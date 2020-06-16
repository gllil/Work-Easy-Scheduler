import React, { useState, useEffect } from "react";
import EmployeeNav from "../../../components/EmployeeNav";
import { Container, Button, Row, Col, Form, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "../../../utils/API";
import Moment from "moment";

function EmployeeHome(props) {
  let currentDate = Moment(new Date()).format("YYYY-MM-DD");
  const [employee, setEmployee] = useState();
  const [date, setDate] = useState({
    selectDate: currentDate,
  });
  const [time, setTime] = useState({
    startTime: "",
    endTime: "",
  });

  console.log(date.selectDate);

  useEffect(() => {
    if (props.auth.user.email) {
      API.getEmployee(props.auth.user.email).then((res) => {
        setEmployee(res.data);
      });
    }
  }, [props]);

  console.log(employee);

  function handleSortDate(dateInfo) {
    switch (dateInfo) {
      case "Sunday":
        return (
          <div>
            {employee ? employee.schedule.Sunday.timeStart : null} -
            {employee ? employee.schedule.Sunday.timeStop : null}
          </div>
        );
        break;
      case "Monday":
        return (
          <div>
            {employee ? employee.schedule.Monday.timeStart : null} -
            {employee ? employee.schedule.Monday.timeStop : null}
          </div>
        );
        break;
      case "Tuesday":
        return (
          <div>
            {employee ? employee.schedule.Tuesday.timeStart : null} -
            {employee ? employee.schedule.Tuesday.timeStop : null}
          </div>
        );
        break;
      case "Wednesday":
        return (
          <div>
            {employee ? employee.schedule.Wednesday.timeStart : null} -
            {employee ? employee.schedule.Wednesday.timeStop : null}
          </div>
        );
        break;
      case "Thursday":
        return (
          <div>
            {employee ? employee.schedule.Thursday.timeStart : null} -
            {employee ? employee.schedule.Thursday.timeStop : null}
          </div>
        );
        break;
      case "Friday":
        return (
          <div>
            {employee ? employee.schedule.Friday.timeStart : null} -
            {employee ? employee.schedule.Friday.timeStop : null}
          </div>
        );
        break;
      case "Saturday":
        return (
          <div>
            {employee ? employee.schedule.Saturday.timeStart : null} -
            {employee ? employee.schedule.Saturday.timeStop : null}
          </div>
        );
    }
  }

  function handleDateChange(e) {
    e.preventDefault();
    const { dataset, value } = e.target;
    console.log(dataset, value);
    setDate({ date, [dataset.property]: value });
  }

  const selectedDate = Moment(date.selectDate).format("dddd, MMMM Do, YYYY");
  const selectedDayOfWeek = Moment(date.selectDate).format("dddd");

  return (
    <div>
      <EmployeeNav />
      <Container>
        <Row className="text-center">
          <Col>
            <h3>Schedule</h3>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Form>
              <Form.Group>
                <Form.Label>Filter By Date</Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={currentDate}
                  data-property="selectDate"
                  onChange={(e) => handleDateChange(e)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Table className="text-center">
          <thead>
            <tr>
              <th colSpan="2">{selectedDate}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shift</td>
              <td>{handleSortDate(selectedDayOfWeek)}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan="2">
                {Moment(date.selectDate)
                  .add(1, "days")
                  .format("dddd, MMMM Do, YYYY")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shift</td>
              <td>
                {handleSortDate(
                  Moment(date.selectDate).add(1, "days").format("dddd")
                )}
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan="2">
                {Moment(date.selectDate)
                  .add(2, "days")
                  .format("dddd, MMMM Do, YYYY")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shift</td>
              <td>
                {handleSortDate(
                  Moment(date.selectDate).add(2, "days").format("dddd")
                )}
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan="2">
                {Moment(date.selectDate)
                  .add(3, "days")
                  .format("dddd, MMMM Do, YYYY")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shift</td>
              <td>
                {handleSortDate(
                  Moment(date.selectDate).add(3, "days").format("dddd")
                )}
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan="2">
                {Moment(date.selectDate)
                  .add(4, "days")
                  .format("dddd, MMMM Do, YYYY")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shift</td>
              <td>
                {handleSortDate(
                  Moment(date.selectDate).add(4, "days").format("dddd")
                )}
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan="2">
                {Moment(date.selectDate)
                  .add(5, "days")
                  .format("dddd, MMMM Do, YYYY")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shift</td>
              <td>
                {handleSortDate(
                  Moment(date.selectDate).add(5, "days").format("dddd")
                )}
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan="2">
                {Moment(date.selectDate)
                  .add(6, "days")
                  .format("dddd, MMMM Do, YYYY")}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shift</td>
              <td>
                {handleSortDate(
                  Moment(date.selectDate).add(6, "days").format("dddd")
                )}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

EmployeeHome.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, {})(EmployeeHome);
