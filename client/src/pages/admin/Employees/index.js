import React from "react";
import AdminNav from "../../../components/AdminNav"
import { Container, Col, Row } from "react-bootstrap";

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
        </Container>
    </div>
    )
}

export default Employees;