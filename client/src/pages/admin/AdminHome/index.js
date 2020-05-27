import React from "react";
import AdminNav from "../../../components/AdminNav"
import { Container, Row, Col } from "react-bootstrap";

function AdminHome() {
    return(
        <div>
        <AdminNav />
        <Container fluid>
            <Row>
                <Col md={{ span: 4, offset: 4 }} className="text-center">
                <h3>Current Schedules</h3>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 4 }} className="text-center">
                <h3>Pending Approvals</h3>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default AdminHome;