import React, { useState } from "react";
import EmployeeNav from "../../../components/EmployeeNav";
import Day from "../../../components/scheduleLayout/Day";
import Week from "../../../components/scheduleLayout/Week";
import Month from "../../../components/scheduleLayout/Month"
import { Container, ButtonGroup, Button, Row, Col } from "react-bootstrap";

function EmployeeHome() {

    const [ currentView, setCurrentView ] = useState({
        view: "week"
    })

    function handleDayClick(e) {
        e.preventDefault();

        setCurrentView({view: "day"})
    }

    function handleMonthClick(e) {
        e.preventDefault();

        setCurrentView({view: "month"})
    }

    function handleWeekClick(e) {
        e.preventDefault();

        setCurrentView({view: "week"})
    }

    function sortView(){
        // eslint-disable-next-line
        switch(currentView.view) {
            case "day":
                return <Day />;
            case "week":
                return <Week />;
            case "month":
                return <Month />;
        }
    }

  return (
    <div>
      <EmployeeNav />
      <Container>
        <Row>
          <Col>
            <h3>Schedule</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonGroup>
              <Button variant="secondary" onClick={handleDayClick}>Day</Button>
              <Button variant="secondary" onClick={handleWeekClick}>Week</Button>
              <Button variant="secondary" onClick={handleMonthClick}>Month</Button>
            </ButtonGroup>
          </Col>
        </Row>
        {sortView()}
      </Container>
    </div>
  );
}

export default EmployeeHome;
