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

module.exports = router;
