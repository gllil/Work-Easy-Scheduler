const mongoose = ("mongoose");
const db = require("../models/adminModel")




const adminData= [{
    nameofCompany: "Microsoft",
    nameofAdmin: "Mike",
    email: "mike1@gmail.com",
    password: "1234567",
    address: "123 broken lane rd"
},
{
    nameofCompany: "IBM",
    nameofAdmin: "Mo",
    email: "Mo1@gmail.com",
    password: "123434223",
    address: "152 sun lane rd"
}]
 db.adminModel
//   .remove({})
//   .then(() => db.Book.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
  // });
module.exports = adminData
const adminData = mongoose.model("adminData", adminSchema);