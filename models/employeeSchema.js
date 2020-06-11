const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employerName: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  middleinitial: {
    type: String,
    required: false,
  },
  lastname: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  ssn: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid email"],
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  employeeStatus: {
    type: String,
    required: true,
  },
  employers: [
    {
      employer: {
        type: String,
        required: true,
      },
      jobDescription: {
        type: String,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: false,
      },
      managerName: {
        type: String,
        required: false,
      },
      managerPhone: {
        type: String,
        required: false,
      },
      leaveReason: {
        type: String,
        required: false,
      },
      currentlyEmployed: {
        type: Boolean,
        default: false,
        required: false,
      },
    },
  ],
  adminDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  //employerContact:{
  //   type
  //}
});

module.exports = mongoose.model("employee", employeeSchema);
