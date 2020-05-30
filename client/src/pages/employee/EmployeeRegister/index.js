import React, { useState } from "react";
import PreEmpNav from "../../../components/PreEmpNav";
// import EmployerHistory from "../../../components/EmployerHistory"
import { Container, Form, Col, Button, Row } from "react-bootstrap";

function EmployeeRegister() {
  const [personalInfo, setPersonalInfo] = useState({});

  const [employerInfo, setEmployerInfo] = useState([]);

  function addMoreEmployers() {
    setEmployerInfo([
      ...employerInfo,
      {},
    ]);
  }

  function removeEmployers(index) {
    const form = [...employerInfo];
    form.splice(index, 1);
    setEmployerInfo(form);
  }

  function handlePersonalInfoChange(event) {
    const { controlId, value } = event.target;

    setPersonalInfo({ ...personalInfo, [controlId]: value });
  }

  function handleEmpHistoryChange(event, index) {
    const { dataset, value } = event.target;
    console.log(dataset, value)
    const form = [...employerInfo];
    form[index][dataset.property] = value;
    setEmployerInfo(form);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <PreEmpNav />
      <Container>
        <div className="text-center">
          <h3>Employment Application</h3>
        </div>
        <Form onChange={handlePersonalInfoChange} onSubmit={handleSubmit}>
          <h5>Personal Info</h5>
          <hr />
          <Form.Row>
            <Form.Group as={Col} md="5" controlId="first-name">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="middle-name">
              <Form.Label>M.I.</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="last-name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group
              as={Col}
              md={{ span: 4, offset: 2 }}
              controlId="social-security"
            >
              <Form.Label>Social Security</Form.Label>
              <Form.Control
                maxLength={9}
                minLength={9}
                placeholder="000-000-0000"
                typeof="number"
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group controlId="street-address1">
            <Form.Label>Address 1</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="street-address2">
            <Form.Label>Address 2 </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="zip-code">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>
        </Form>
        <h5>Employment History</h5>
        <hr />
        {employerInfo.map((empInfo, i) => {

          return (
            <Form
              onChange={(e) => handleEmpHistoryChange(e, i)}
              onSubmit={handleSubmit}
              key={i}
            >
              <strong>Employer {i + 1}</strong>
              <Form.Group >
                <Form.Label>Employer Name</Form.Label>
                <Form.Control  type="text" data-property={"employerName"} />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} >
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control type="date" data-property={"startDate"}  />
                </Form.Group>
                <Form.Group as={Col} >
                  <Form.Label>End Date</Form.Label>
                  <Form.Control type="date" data-property={"endDate"}  />
                  <Form.Check
                    type="checkbox"
                    label="Currently Working Here"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Group >
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                  as="textarea"
                  data-property={"jobDescription"} 
                />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} >
                  <Form.Label>Manager/Supervisor Name</Form.Label>
                  <Form.Control type="text" data-property={"mgrName"}  />
                </Form.Group>
                <Form.Group as={Col} >
                  <Form.Label>Manager/Supervisor Phone Number</Form.Label>
                  <Form.Control type="text" data-property={"mgrPhone"}  />
                </Form.Group>
              </Form.Row>
              <Form.Group >
                <Form.Label>Reason for Leaving</Form.Label>
                <Form.Control
                  as="textarea"
                  data-property={"leaveReason"} 
                />
              </Form.Group>
            </Form>
          );
        })}
        <Row>
          <Button
            as={Col}
            md={{ span: 3, offset: 1 }}
            onClick={addMoreEmployers}
          >
            Add Employer
          </Button>
          <Button
            as={Col}
            md={{ span: 3, offset: 4 }}
            onClick={removeEmployers}
          >
            Remove Employer
          </Button>
        </Row>
        <hr />
        <Button type="submit">Submit</Button>
      </Container>
    </div>
  );
}

export default EmployeeRegister;
