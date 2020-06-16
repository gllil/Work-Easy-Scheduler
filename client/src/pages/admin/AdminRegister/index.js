import React, { Component } from "react";
import HomeNav from "../../../components/HomeNav";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import API from "../../../utils/API";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../../actions/authActions";

class AdminRegister extends Component {
  constructor() {
    super();
    this.state = {
      company: "",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
      accessType: "admin",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) this.props.history.push("/adminhome");
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) this.props.history.push("/adminhome");

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.dataset.property]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    
    
    const newUser = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      accessType: this.state.accessType,
    };

    const storeAdminInfo = {
      nameofCompany: this.state.company,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
    };

    const companyName = {
      nameofCompany: this.state.company
    }

    console.log(newUser)
    console.log(storeAdminInfo);
    console.log(companyName)
    
    API.addAdmin(storeAdminInfo)
    .then(() => this.props.registerUser(newUser, this.props.history))
    .catch(err => console.log(err))
  }
  render() {

    const { errors } = this.state;

    return (
      <div>
        <Container fluid>
          <HomeNav />
        </Container>
        <Container>
          <Row>
            <Col className="text-center">
              <h3>Admin Registration</h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p>Already have an account? <Link to="/adminlogin">Login</Link></p>
            </Col>
          </Row>
          <Form>
            <Form.Group controlId="company">
              <Form.Label>Business/Organization Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Business/Organization Name"
                data-property="company"
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="firstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="First Name"
                    data-property="firstname"
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="lastname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Last Name"
                    data-property="lastname"
                    onChange={this.handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@example.com"
                data-property="email"
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="phone"
                placeholder="555-555-5555"
                data-property="phone"
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="address1">
              <Form.Label>Address 1</Form.Label>
              <Form.Control
                onChange={this.handleChange}
                data-property="address1"
                required
              />
            </Form.Group>
            <Form.Group controlId="address2">
              <Form.Label>Address 2 </Form.Label>
              <Form.Control
                onChange={this.handleChange}
                data-property="address2"
              />
            </Form.Group>
            <Row>
              <Form.Group as={Col} md="6" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChange}
                  data-property="city"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChange}
                  data-property="state"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="zipcode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  onChange={this.handleChange}
                  data-property="zipCode"
                  required
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={this.handleChange}
                  data-property="password"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="password2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={this.handleChange}
                  data-property="password2"
                  required
                />
              </Form.Group>
            </Row>
          </Form>
          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Container>
      </div>
    );
  }
}

AdminRegister.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(AdminRegister)
);
