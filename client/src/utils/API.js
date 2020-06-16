import axios from "axios";

export default {
  getEmployees: () => {
    return axios.get("/api/employees/");
  },

  getEmployee: (email) => {
    return axios.get("/api/employees/" + email);
  },

  getAdmin: (id) => {
    return axios.get("/api/admin/" + id);
  },

  getCompanies: () => {
    return axios.get("/api/company");
  },

  updateEmployee: (id) => {
    return axios.put("/api/employees/" + id);
  },

  updateEmployeeInfo: (info, id) => {
    return axios.put("/api/employees/" + id, info);
  },

  deleteEmployee: (id) => {
    return axios.delete("/api/employees/" + id);
  },

  getSchedules: () => {
    return axios.get("/api/schedules/");
  },

  addSchedule: (scheduleInfo) => {
    return axios.post("/api/schedules/", scheduleInfo);
  },

  deleteSchedule: (id) => {
    return axios.delete("/api/schedules/" + id);
  },

  addEmployee: (employeeInfo) => {
    return axios.post("/api/employees/", employeeInfo);
  },

  addAdmin: (adminInfo) => {
    return axios.post("/api/admin/", adminInfo);
  },

  addCompany: (companyName) => {
    return axios.post("/api/admin", companyName);
  },
  getUser: () => {
    return axios.get("/api/user/");
  },
};
