const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
nameofCompany: {
    type: String,
    required: true
},
firstname: {
    type:String,
    required:true
},
lastname: {
    type:String,
    required:true
},
email: {
    type:String,
    trim:true,
    unique:true,
    match:[/.+@.+\..+/,"Please enter a valid email"]
},
phone: {
    type:String,
    required: true,
},
address1:{
        type:String,
        required:true,
},
address2:{
        type:String,
        required:false,
},
city:{
        type:String,
        required:true,
},
state:{
        type:String,
        required:true,
},
zipCode:{
        type:String,
        required:true,
},
adminDate: {
    type: Date,
    default:Date.now
}

})

module.exports = mongoose.model('admin',adminSchema)