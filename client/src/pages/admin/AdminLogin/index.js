import React, { Component } from "react";
import HomeNav from "../../../components/HomeNav";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginAdminUser } from "../../../actions/authActions";

class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
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

    const userData = {
      email: this.state.email,
      password: this.state.password,
      company: this.props.auth.user.company,
    };

    // console.log(userData);
    this.props.loginAdminUser(userData);
  };

  render() {
    return (
      <div>
        <Container fluid>
          <HomeNav />
        </Container>
        <Container>
          <Row>
            <Col className="text-center">
              <h3>Admin Login</h3>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p>
                Don't have an account? <Link to="/adminregister">Register</Link>
              </p>
            </Col>
          </Row>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="adminEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                placeholder="email"
                type="email"
                data-property="email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="adminPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="password"
                data-property="password"
                type="password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

AdminLogin.propTypes = {
  loginAdminUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginAdminUser })(AdminLogin);
