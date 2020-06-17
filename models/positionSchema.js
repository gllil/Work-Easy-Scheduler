const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
  position: {
    type: String,
  },
});

module.exports = mongoose.model("position", positionSchema);
