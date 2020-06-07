const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
nameofCompany: {
    type: String,
    required: true
},
nameofAdmin: {
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
    type:Number,
    required: true,
},
password:{
    type:String,
    required:true,
    
},
address:{
        type:String,
        required:true,
},
adminDate: {
    type: Date,
    default:Date.now
}

})

module.exports = mongoose.model('admin',adminSchema)