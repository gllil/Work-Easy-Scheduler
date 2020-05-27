import React from "react";
import EmployeeNav from "../../../components/EmployeeNav";
import { Container, Col, Row } from "react-bootstrap";

function TimeOff() {
    return(
        <div>
            <EmployeeNav />
            <Container>
                <Row>
                    <Col className="text-center">
                    <h3>Time Off Request</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TimeOff;