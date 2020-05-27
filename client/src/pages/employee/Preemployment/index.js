import React from "react";
import PreEmpNav from "../../../components/PreEmpNav";
import { Container, Col, Row } from "react-bootstrap";

function Preemployment() {
    return(
        <div>
            <PreEmpNav />
            <Container>
                <Row>
                    <Col className="text-center">
                    <h3>Applicant Information</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                    <h3>Application Status</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Preemployment;