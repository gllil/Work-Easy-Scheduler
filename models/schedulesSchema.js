const mongoose = require("mongoose");

const schedulesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  weekday: {
    type: String,
    required: true,
  },
  timeStart: {
    type: String,
    required: true,
  },
  timeStop: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("schedules", schedulesSchema);
