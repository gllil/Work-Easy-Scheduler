const express = require("express");
const router = express.Router();

const Companies = require("../models/companiesSchema");

//finding all  companies
router.get("/", async (req, res) => {
  try {
    const companies = await Companies.find();
    res.json(companies);
    //res.send('Hello')
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  //creating a new companies
  router.post("/", (req, res) => {
    const body = req.body;
    Companies.create(body).then((model) => res.json(model));
  });
  // updating companies
  router.put("companyUpdate/:id", (req, res) => {
    companies
      .findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
      })
      .then((dbPosition) => {
        res.json(dbPosition);
      });
  });
});
// delete companies
router.delete("/:id", async (req, res) => {
  try {
    const companies = await Companies.findByIdAndDelete(req.params.id);
    res.json({ message: "Company deleted" });
    //res.send('Hello')
    console.log(companies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
