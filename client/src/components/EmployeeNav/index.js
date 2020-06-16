import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Container, Nav, Navbar } from "react-bootstrap";

class EmployeeNav extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <Container fluid>
        <Navbar collapseOnSelect bg="light" variant="light" expand="md">
          <Navbar.Brand href="/employeehome">Work Easy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              {/* <Nav.Item>
                <Nav.Link href="/trade">Trade Schedule</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/timeoff">Request Time Off</Nav.Link>
              </Nav.Item> */}
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

EmployeeNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { logoutUser })(EmployeeNav);
