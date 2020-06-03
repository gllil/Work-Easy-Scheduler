import React from "react";
import AdminNav from "../../../components/AdminNav"
import { Container, Col, Row, Table } from "react-bootstrap";

function Employees() {
    return(
    <div>
        <AdminNav />
        <Container>
            <Row>
                <Col className="text-center">
                <h3>Employees</h3>
                </Col>
            </Row>
            <Table>
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
    )
}

export default Employees;