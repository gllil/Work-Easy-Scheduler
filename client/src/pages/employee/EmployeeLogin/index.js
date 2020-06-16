import React, { Component } from "react";
import { Button, Container, Form, Col, Row } from "react-bootstrap";
import PreEmpNav from "../../../components/PreEmpNav";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";

class EmployeeLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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

  handleChange = (e) => {
    this.setState({ [e.target.dataset.property]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <Container fluid>
          <PreEmpNav />
        </Container>
        <Container>
          <Row>
            <Col className="text-center">
              <h3>Employee Login</h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p>
                Don't have an account? <Link to="/employeeregister">Apply</Link>
              </p>
            </Col>
          </Row>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="adminEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="email"
                type="email"
                onChange={this.handleChange}
                data-property="email"
              />
            </Form.Group>
            <Form.Group controlId="adminPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="password"
                type="password"
                onChange={this.handleChange}
                data-property="password"
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

EmployeeLogin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(EmployeeLogin);
