import React from "react";
import { Table } from "react-bootstrap";
import "./schedule.css";

function Day() {
  return (
    <Table className="center">
      <thead>
        <tr>
          <th colSpan="3">March 20, 2021</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Shift</td>
          <td>12:00 pm - 8:00 pm</td>
          <td>Shift Duration 8:00</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Day;
