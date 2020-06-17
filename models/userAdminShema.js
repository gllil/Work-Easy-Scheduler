const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminUserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  company: {
      type:String,
      required:true
  }
});

module.exports = AdminUser = mongoose.model("AdminUser", AdminUserSchema);
