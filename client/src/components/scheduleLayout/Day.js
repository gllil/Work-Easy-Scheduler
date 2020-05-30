import React from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap"

function Day(){
    return(
        <Container fluid>
            <Row>
                <Col>
                <ul>
                    <li>
                    <h5>Date</h5>
                    <ListGroup horizontal>
                    <ListGroup.Item as={Col} sm="2">Shift</ListGroup.Item>
                    <ListGroup.Item as={Col} sm="8">TimeStart-TimeEnd</ListGroup.Item>
                    <ListGroup.Item as={Col} sm="2">Duration</ListGroup.Item>
                    </ListGroup>
                    </li>
                </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Day;