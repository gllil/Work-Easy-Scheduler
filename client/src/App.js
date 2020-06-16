import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import AdminHome from "./pages/admin/AdminHome";
import Employees from "./pages/admin/Employees";
import Hiring from "./pages/admin/Hiring";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminRegister from "./pages/admin/AdminRegister";
import Schedules from "./pages/admin/Schedules";
import EmployeeHome from "./pages/employee/EmployeeHome";
import EmployeeLogin from "./pages/employee/EmployeeLogin";
import EmployeeRegister from "./pages/employee/EmployeeRegister";
import TimeOff from "./pages/employee/TimeOff";
import Trade from "./pages/employee/Trade";
import Preemployment from "./pages/employee/Preemployment";
import PrivateRoute from "./components/private-route/PrivateRoute";
// import CompanySelection from "./pages/employee/CompanySelection"

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);

  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/adminlogin" component={AdminLogin} />
          <Route path="/adminregister" component={AdminRegister} />
          <Route path="/employeelogin" component={EmployeeLogin} />
          {/* <Route path="/companyselection" component={CompanySelection} /> */}
          <Route path="/employeeregister" component={EmployeeRegister} />
          <Switch>
            <PrivateRoute exact path="/adminhome" component={AdminHome} />
            <PrivateRoute exact path="/employees" component={Employees} />
            <PrivateRoute exact path="/hiring" component={Hiring} />
            <PrivateRoute exact path="/schedules" component={Schedules} />
            <PrivateRoute exact path="/employeehome" component={EmployeeHome} />
            <PrivateRoute exact path="/timeoff" component={TimeOff} />
            <PrivateRoute exact path="/trade" component={Trade} />
            <PrivateRoute exact path="/preemployment" component={Preemployment} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
