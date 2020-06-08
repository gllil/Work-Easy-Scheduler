import axios from "axios";

export default {
    getEmployees: () => {
        return axios.get("/api/employees/")
    },

    getAdmin: (id) => {
        return axios.get("/api/admin/" + id)
    },

    updateEmployee: (id) => {
        return axios.update("/api/employees/" + id)
    },

    deleteEmployee: (id) => {
        return axios.delete("/api/employees/" + id)
    },

    getSchedules: () => {
        return axios.get("/api/schedules")
    },

    addSchedule: (scheduleInfo) => {
        return axios.post("/api/schedules", scheduleInfo)
    },

    deleteSchedule: (id) => {
        return axios.delete("/api/schedules/" + id)
    },
    
}