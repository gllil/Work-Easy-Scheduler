import React from "react";
import AdminNav from "../../../components/AdminNav";
import { Container, Col, Row } from "react-bootstrap";
import Day from "../../../components/scheduleLayout/Day"

function Schedules(){
    return(
        <div>
            <AdminNav />
            <Container>
                <Row>
                    <Col className="text-center">
                    <h3>Schedules</h3>
                    <Day />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Schedules;