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
      mgrName: {
        type: String,
        required: false,
      },
      mgrPhone: {
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
  position: {
    type: String,
  },
  adminDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  schedule: {
    Sunday: {
      timeStart: String,
      timeStop: String,
    },
    Monday: {
      timeStart: String,
      timeStop: String,
    },
    Tuesday: {
      timeStart: String,
      timeStop: String,
    },
    Wednesday: {
      timeStart: String,
      timeStop: String,
    },
    Thursday: {
      timeStart: String,
      timeStop: String,
    },
    Friday: {
      timeStart: String,
      timeStop: String,
    },
    Saturday: {
      timeStart: String,
      timeStop: String,
    },
  },
});

module.exports = mongoose.model("employee", employeeSchema);
