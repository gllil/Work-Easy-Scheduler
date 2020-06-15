import React from "react";
import { Table } from "react-bootstrap";
import "./schedule.css";

function Week() {
  return (
    <Table className="text-center">
      <thead>
        <tr>
          <th colSpan="3">March 20, 2021 - March 27, 2021</th>
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

export default Week;
