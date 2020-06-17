import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/AdminNav";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col, Table } from "react-bootstrap";
import API from "../../../utils/API";

function AdminHome(props) {
  const [schedules, setSchedules] = useState();

  console.log(schedules);
  useEffect(() => {
    API.getEmployees().then((res) => setSchedules(res.data));
  }, []);

  const userCompany = props.auth.user.company;

  console.log(userCompany);

  const filteredSchedules = schedules
    ? schedules.filter((res) => res.employeeName === userCompany)
    : null;

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
            {filteredSchedules
              ? filteredSchedules.map((res) => {
                  console.log(res);
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
      </Container>
    </div>
  );
}

AdminHome.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, {})(AdminHome);
