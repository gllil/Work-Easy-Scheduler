import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";
import { logoutUser } from "../../actions/authActions";

class AdminNav extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;

    return (
      <Container fluid>
        <Navbar collapseOnSelect bg="light" variant="light" expand="md">
          <Navbar.Brand href="/adminhome">Work Easy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/employees">Manage Employees</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/schedules">Manage Schedules</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/hiring">Recruiting</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.onLogoutClick}>Logout</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

AdminNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser }) (AdminNav);
