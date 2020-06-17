const mongoose = require("mongoose");

const companiesSchema = new mongoose.Schema({
  company: {
    type: String,
  },
});

module.exports = mongoose.model("companies", companiesSchema);
