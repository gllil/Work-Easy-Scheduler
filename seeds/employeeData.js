const mongoose = require("mongoose");
const employeeModel = require("../models/employeeSchema");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/Workeasy"
);

const employeeData = [
  {
    employerName: "Company",
    firstname: "Alan",
    middlename: "",
    lastname: "Jackman",
    dob: "1990-01-20",
    ssn: "753426759",
    phone: "8568962354",
    email: "alan@email.com",
    address1: "123 Main St",
    address2: "",
    city: "New York",
    state: "NY",
    zipCode: "11101",
    employers: [
      {
        employer: "The Shop",
        jobDescription: "A description of a company",
        startDate: "2015-03-20",
        endDate: "2019-03-20",
        mgrName: "Travis",
        mgrPhone: "5625895632",
        leaveReason: "to work here",
        currentlyEmployed: false,
      },
    ],
    employeeStatus: "recruit",
    accessType: "employee",
    schedule: {
      Sunday: {
        timeStart: "",
        timeStop: "",
      },
      Monday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Tuesday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Wednesday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Thursday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Friday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Saturday: {
        timeStart: "",
        timeStop: "",
      },
    },
  },
  {
    employerName: "Company",
    firstname: "Irma",
    middlename: "",
    lastname: "Benson",
    dob: "1990-01-20",
    ssn: "753426759",
    phone: "8568962354",
    email: "irma@email.com",
    address1: "123 Main St",
    address2: "",
    city: "New York",
    state: "NY",
    zipCode: "11101",
    employers: [
      {
        employer: "The Shop",
        jobDescription: "A description of a company",
        startDate: "2015-03-20",
        endDate: "2019-03-20",
        mgrName: "Travis",
        mgrPhone: "5625895632",
        leaveReason: "to work here",
        currentlyEmployed: false,
      },
    ],
    employeeStatus: "recruit",
    accessType: "employee",
    schedule: {
      Sunday: {
        timeStart: "",
        timeStop: "",
      },
      Monday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Tuesday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Wednesday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Thursday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Friday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Saturday: {
        timeStart: "",
        timeStop: "",
      },
    },
  },
  {
    employerName: "Company",
    firstname: "Dana",
    middlename: "",
    lastname: "Trevor",
    dob: "1990-01-20",
    ssn: "753426759",
    phone: "8568962354",
    email: "dana@email.com",
    address1: "123 Main St",
    address2: "",
    city: "New York",
    state: "NY",
    zipCode: "11101",
    employers: [
      {
        employer: "The Shop",
        jobDescription: "A description of a company",
        startDate: "2015-03-20",
        endDate: "2019-03-20",
        mgrName: "Travis",
        mgrPhone: "5625895632",
        leaveReason: "to work here",
        currentlyEmployed: false,
      },
    ],
    employeeStatus: "recruit",
    accessType: "employee",
    schedule: {
      Sunday: {
        timeStart: "",
        timeStop: "",
      },
      Monday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Tuesday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Wednesday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Thursday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Friday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Saturday: {
        timeStart: "",
        timeStop: "",
      },
    },
  },
  {
    employerName: "Company",
    firstname: "John",
    middlename: "",
    lastname: "Osborne",
    dob: "1990-01-20",
    ssn: "753426759",
    phone: "8568962354",
    email: "john@email.com",
    address1: "123 Main St",
    address2: "",
    city: "New York",
    state: "NY",
    zipCode: "11101",
    employers: [
      {
        employer: "The Shop",
        jobDescription: "A description of a company",
        startDate: "2015-03-20",
        endDate: "2019-03-20",
        mgrName: "Travis",
        mgrPhone: "5625895632",
        leaveReason: "to work here",
        currentlyEmployed: false,
      },
    ],
    employeeStatus: "recruit",
    accessType: "employee",
    schedule: {
      Sunday: {
        timeStart: "",
        timeStop: "",
      },
      Monday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Tuesday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Wednesday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Thursday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Friday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Saturday: {
        timeStart: "",
        timeStop: "",
      },
    },
  },
  {
    employerName: "Company",
    firstname: "Michael",
    middlename: "",
    lastname: "McDonald",
    dob: "1990-01-20",
    ssn: "753426759",
    phone: "8568962354",
    email: "michael@email.com",
    address1: "123 Main St",
    address2: "",
    city: "New York",
    state: "NY",
    zipCode: "11101",
    employers: [
      {
        employer: "The Shop",
        jobDescription: "A description of a company",
        startDate: "2015-03-20",
        endDate: "2019-03-20",
        mgrName: "Travis",
        mgrPhone: "5625895632",
        leaveReason: "to work here",
        currentlyEmployed: false,
      },
    ],
    employeeStatus: "recruit",
    accessType: "employee",
    schedule: {
      Sunday: {
        timeStart: "",
        timeStop: "",
      },
      Monday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Tuesday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Wednesday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Thursday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Friday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Saturday: {
        timeStart: "",
        timeStop: "",
      },
    },
  },
  {
    employerName: "Company",
    firstname: "Parker",
    middlename: "",
    lastname: "Davis",
    dob: "1990-01-20",
    ssn: "753426759",
    phone: "8568962354",
    email: "parker@email.com",
    address1: "123 Main St",
    address2: "",
    city: "New York",
    state: "NY",
    zipCode: "11101",
    employers: [
      {
        employer: "The Shop",
        jobDescription: "A description of a company",
        startDate: "2015-03-20",
        endDate: "2019-03-20",
        mgrName: "Travis",
        mgrPhone: "5625895632",
        leaveReason: "to work here",
        currentlyEmployed: false,
      },
    ],
    employeeStatus: "recruit",
    accessType: "employee",
    schedule: {
      Sunday: {
        timeStart: "",
        timeStop: "",
      },
      Monday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Tuesday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Wednesday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Thursday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Friday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Saturday: {
        timeStart: "",
        timeStop: "",
      },
    },
  },
  {
    employerName: "Company",
    firstname: "Janet",
    middlename: "",
    lastname: "Anderson",
    dob: "1990-01-20",
    ssn: "753426759",
    phone: "8568962354",
    email: "janet@email.com",
    address1: "123 Main St",
    address2: "",
    city: "New York",
    state: "NY",
    zipCode: "11101",
    employers: [
      {
        employer: "The Shop",
        jobDescription: "A description of a company",
        startDate: "2015-03-20",
        endDate: "2019-03-20",
        mgrName: "Travis",
        mgrPhone: "5625895632",
        leaveReason: "to work here",
        currentlyEmployed: false,
      },
    ],
    employeeStatus: "recruit",
    accessType: "employee",
    schedule: {
      Sunday: {
        timeStart: "",
        timeStop: "",
      },
      Monday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Tuesday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Wednesday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Thursday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Friday: {
        timeStart: "09:00",
        timeStop: "17:00",
      },
      Saturday: {
        timeStart: "",
        timeStop: "",
      },
    },
  },
];
employeeModel
  .remove({})
  .then(() => employeeModel.insertMany(employeeData))
  .then((data) => {
    console.log(data + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
