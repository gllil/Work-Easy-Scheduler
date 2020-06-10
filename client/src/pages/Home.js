import React from "react";
import HomeNav from "../components/HomeNav";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Home.css"

function Home() {
  return (
    <div>
      <HomeNav />
      <Container>
        <Row>
          <Col className="text-center">
            <h3>Work Easy Scheduler</h3>
            <p>
              <em>
                Make your business more efficient by managing your employees
                schedules in one easy application.
              </em>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button href="/adminregister" className="homeBtn text-white">
                Get Started
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Button href="/adminlogin"className="homeBtn text-white">
                Login
            </Button>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Home;
