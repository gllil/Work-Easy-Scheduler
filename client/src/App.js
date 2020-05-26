import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/adminhome" component={AdminHome} />
        <Route path="/employee" component={Employees} />
        <Route path="/hiring" component={Hiring} />
        <Route path="/adminlogin" component={AdminLogin} />
        <Route path="/adminregister" component={AdminRegister} />
        <Route path="/schedules" component={Schedules} />
        <Route path="/employeehome" component={EmployeeHome} />
        <Route path="/employeelogin" component={EmployeeLogin} />
        <Route path="/employeeregister" component={EmployeeRegister} />
        <Route path="/timeoff" component={TimeOff} />
        <Route path="/trade" component={Trade} />
      </Switch>
    </Router>
  );
}

export default App;
