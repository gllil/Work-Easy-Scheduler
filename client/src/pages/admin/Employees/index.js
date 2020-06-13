import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/AdminNav";
import { Container, Col, Row, Table } from "react-bootstrap";
import API from "../../../utils/API";
import Moment from "moment";

function Employees() {
  const [employees, setEmployees] = useState();

  useEffect(() => {
    API.getEmployees().then((res) => setEmployees(res.data));
  }, []);

  console.log(employees);

  return (
    <div>
      <AdminNav />
      <Container>
        <Row>
          <Col className="text-center">
            <h3>Employees</h3>
          </Col>
        </Row>
        <Table className="text-center">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Start Date</th>
              <th>Employment Status</th>
              <th>Position</th>
              <th>D.O.B.</th>
            </tr>
          </thead>
          <tbody>
            {employees
              ? employees.map((emp, i) => (
                  <tr key={i}>
                    <td>
                      {emp.firstname} {emp.lastname}
                    </td>
                    <td>{Moment(emp.adminDate).format("MM/DD/YYYY")}</td>
                    <td>{emp.employeeStatus}</td>
                    <td>Position</td>
                    <td>{Moment(emp.dob).format("MM/DD/YYYY")}</td>
                  </tr>
                ))
              : "Loading..."}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Employees;
