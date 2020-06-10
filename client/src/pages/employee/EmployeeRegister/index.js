import React, { Component } from "react";
import PreEmpNav from "../../../components/PreEmpNav";
// import EmployerHistory from "../../../components/EmployerHistory"
import { Container, Form, Col, Button, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";
// import API from "../../../utils/API"

class EmployeeRegister extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      middlename: "",
      lastname: "",
      dob: "",
      socialsecurity: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
      password: "",
      password2: "",
      accessType: "employee",
      employers: [],
      employeeStatus: "recruit",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated)
      this.props.history.push("/employeehome");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated)
      this.props.history.push("/employeehome");

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  addMoreEmployers = () => {
    this.setState({
      employers: [...this.state.employers, {}],
    });
  };

  removeEmployers = (index) => {
    const form = [...this.state.employers];
    form.splice(index, 1);
    this.setState({ employers: form });
  };

  handlePersonalInfoChange = (e) => {
    this.setState({ [e.target.dataset.property]: e.target.value });
  };

  handleEmpHistoryChange = (event, index) => {
    const { dataset, value } = event.target;
    console.log(dataset, value);
    const updatedEmployers = this.state.employers.map((employer, i) => {
      if(i !== index) return employer
      return {
        ...employer, 
        [dataset.property]: value
      }
    })
    this.setState({employers: updatedEmployers})
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <PreEmpNav />
        <Container>
          <Row className="text-center">
            <Col>
              <h3>Employment Application</h3>
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <p>
                Already applied?<Link to="/employeelogin">Login</Link>
              </p>
            </Col>
          </Row>
          <Form onChange={this.handlePersonalInfoChange}>
            <h5>Personal Info</h5>
            <hr />
            <Form.Row>
              <Form.Group as={Col} md="5" controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" data-property="firstname" />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="middle-name">
                <Form.Label>M.I.</Form.Label>
                <Form.Control type="text" data-property="middlename" />
              </Form.Group>
              <Form.Group as={Col} md="5" controlId="last-name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" data-property="lastname" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="dob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" data-property="dob" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="social-security">
                <Form.Label>Social Security</Form.Label>
                <Form.Control
                  maxLength={9}
                  minLength={9}
                  placeholder="000-000-0000"
                  type="password"
                  data-property="socialsecurity"
                />
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" data-property="email" />
            </Form.Group>
            <Form.Group controlId="street-address1">
              <Form.Label>Address 1</Form.Label>
              <Form.Control type="text" data-property="address1" />
            </Form.Group>
            <Form.Group controlId="street-address2">
              <Form.Label>Address 2 </Form.Label>
              <Form.Control type="text" data-property="address2" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} md="6">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" data-property="city" />
              </Form.Group>

              <Form.Group as={Col} md="3">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" data-property="state" />
              </Form.Group>

              <Form.Group as={Col} md="3">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control type="text" data-property="zipcode" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4">
                <Form.Label>Create Password</Form.Label>
                <Form.Control type="password" data-property="password" />
              </Form.Group>
            </Form.Row>
          </Form>
          <h5>Employment History</h5>
          <hr />
          {this.state.employers.map((empInfo, i) => {
            return (
              <Form
                onChange={(e) => this.handleEmpHistoryChange(e, i)}
                onSubmit={this.handleSubmit}
                key={i}
              >
                <strong>Employer {i + 1}</strong>
                <Form.Group>
                  <Form.Label>Employer Name</Form.Label>
                  <Form.Control type="text" data-property="employerName" />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" data-property="startDate" />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="date" data-property="endDate" />
                    <Form.Check
                      type="checkbox"
                      label="Currently Working Here"
                      data-property="employed"
                    />
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.Label>Job Description</Form.Label>
                  <Form.Control as="textarea" data-property="jobDescription" />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Manager/Supervisor Name</Form.Label>
                    <Form.Control type="text" data-property="mgrName" />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Manager/Supervisor Phone Number</Form.Label>
                    <Form.Control type="text" data-property="mgrPhone" />
                  </Form.Group>
                </Form.Row>
                <Form.Group>
                  <Form.Label>Reason for Leaving</Form.Label>
                  <Form.Control as="textarea" data-property="leaveReason" />
                </Form.Group>
              </Form>
            );
          })}

          {this.state.employers.length < 1 ? (
            <Row>
              <Button
                as={Col}
                md={{ span: 4, offset: 4 }}
                onClick={this.addMoreEmployers}
              >
                Add Employer
              </Button>
            </Row>
          ) : (
            <Row>
              <Button
                as={Col}
                md={{ span: 3, offset: 1 }}
                onClick={this.addMoreEmployers}
              >
                Add Employer
              </Button>
              <Button
                as={Col}
                md={{ span: 3, offset: 4 }}
                onClick={this.removeEmployers}
              >
                Remove Employer
              </Button>
            </Row>
          )}

          <hr />
          <Button type="submit" onSubmit={this.handleSubmit}>
            Submit
          </Button>
        </Container>
      </div>
    );
  }
}

EmployeeRegister.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(EmployeeRegister)
);
