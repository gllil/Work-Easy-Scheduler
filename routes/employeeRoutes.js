const express = require("express");
const router = express.Router();

const Employee = require("../models/employeeSchema");

router.get("/", async (req, res) => {
  try {
    const employee = await Employee.find();
    res.json(employee);
    //res.send('Hello')
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/:email", async (req, res) => {
  try {
    const employee = await Employee.findOne({ email: req.params.email });
    res.json(employee);
    //res.send('Hello')
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// delete emplyee
router.delete("/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    res.json({ meeasge: "employee deleted" });
    //res.send('Hello')
    console.log(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// add employee info
router.post("/", (req, res) => {
  const body = req.body;
  Employee.create(body).then((model) => res.json(model));
});

//finding all  employee
router.get("/", async (req, res) => {
  try {
    const employee = await Employee.find();
    res.json(employee);
    //res.send('Hello')
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  //creating a new employee
  router.post("/", (req, res) => {
    const body = req.body;
    Employee.create(body).then((model) => res.json(model));
  });
  // updating employee
  router.put("/:id", (req, res) => {
    Employee.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    }).then((dbEmployee) => {
      res.json(dbEmployee);
    });
  });
});
router.put("/:id", (req, res) => {
  Employee.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  }).then((dbEmployee) => {
    res.json(dbEmployee);
  });
});

// delete employee
router.delete("/:id", async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    res.json({ meeasge: "employee deleted" });
    //res.send('Hello')
    console.log(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
