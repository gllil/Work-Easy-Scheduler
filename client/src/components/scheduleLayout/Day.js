import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import API from "../../utils/API";
import "./schedule.css";

function Day(props) {
  const [employee, setEmployee] = useState({});

  const [user, setUser] = useState("thisemail@ismadeup.com");

  useEffect(() => {
    API.getEmployee(user).then((res) => setEmployee(res.data));
  }, []);

  return (
    <Table className="center">
      <thead>
        <tr>
          <th colSpan="3">{props.date}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Shift</td>
          <td>
            {props.startTime} - {props.endTime}
          </td>
          <td>Total duration: {props.duration}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Day;
