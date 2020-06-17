import React, { Component } from "react";
import PreEmpNav from "../../../components/PreEmpNav";
import { Container, Form, Col, Button, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";
import API from "../../../utils/API";

class EmployeeProfile extends Component {
  constructor() {
    super();
    this.state = {
      employerName: "Company",
      firstname: "",
      middlename: "",
      lastname: "",
      dob: "",
      ssn: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
      password: "",
      password2: "",
      employers: [
        {
          employer: "",
          jobDescription: "",
          startDate: "",
          endDate: "",
          mgrName: "",
          mgrPhone: "",
          leaveReason: "",
          currentlyEmployed: false,
        },
      ],
      employeeStatus: "recruit",
      errors: {},
      accessType: "employee",
    };
  }

  handlePersonalInfoChange = (e) => {
    this.setState({ [e.target.dataset.property]: e.target.value });
  };

  handleEmpHistoryChange = (event, index) => {
    const { dataset, value } = event.target;
    console.log(dataset, value);
    const updatedEmployers = this.state.employers.map((employer, i) => {
      if (i !== index) return employer;
      return {
        ...employer,
        [dataset.property]: value,
      };
    });
    this.setState({ employers: updatedEmployers });
  };

  formatPhoneNumber = (number) => {
    let cleaned = ("" + number).replace(/\D/g, "");
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
  };

  formatSocial = (number) => {
    let cleaned = ("" + number).replace(/\D/g, "");
    let match = cleaned.match(/^(\d{3})(\d{2})(\d{4})$/);
    if (match) {
      return match[1] + "- " + match[2] + "-" + match[3];
    }
    return null;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      accessType: this.state.accessType,
    };

    const applicationInfo = {
      employerName: this.state.employerName,
      firstname: this.state.firstname,
      middleinitial: this.state.middlename,
      lastname: this.state.lastname,
      dob: this.state.dob,
      ssn: this.formatSocial(this.state.ssn),
      phone: this.formatPhoneNumber(this.state.phone),
      email: this.state.email,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipcode,
      employeeStatus: this.state.employeeStatus,
      employers: this.state.employers,
      position: "",
      schedule: {
        Sunday: {
          timeStart: "",
          timeStop: "",
        },
        Monday: {
          timeStart: "",
          timeStop: "",
        },
        Tuesday: {
          timeStart: "",
          timeStop: "",
        },
        Wednesday: {
          timeStart: "",
          timeStop: "",
        },
        Thursday: {
          timeStart: "",
          timeStop: "",
        },
        Friday: {
          timeStart: "",
          timeStop: "",
        },
        Saturday: {
          timeStart: "",
          timeStop: "",
        },
      },
    };

    console.log(newUser);
    console.log(applicationInfo);

    API.addEmployee(applicationInfo)
      .then(() => this.props.registerUser(newUser, this.props.history))
      .catch((err) => console.log(err));
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
                  data-property="ssn"
                />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  data-property="phone"
                  placeholder="(555) 555-5555"
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
              <Form.Group as={Col}>
                <Form.Label>Create Password</Form.Label>
                <Form.Control type="password" data-property="password" />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" data-property="password2" />
              </Form.Group>
            </Form.Row>
          </Form>
          <hr />
          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Container>
      </div>
    );
  }
}

EmployeeProfile.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(EmployeeProfile)
);
