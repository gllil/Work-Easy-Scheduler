const mongoose = require('mongoose')


const employeeSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
dob: {
    type:Number,
    required:true
},
ssn:{
    type:Number,
    required:true
},
phone:{
    type:Number,
    required:true
},
email:{
    type:String,
    required:true,
    match:[/.+@.+\..+/,"Please enter a valid email"]
},
address:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true,
    
},
employeeStatus:{
type:String,
required:true
},
resume: {
    employer:{
        jodDescription:{
            type: String,
            required:true
        }
    }
},
adminDate: {
    type: Date,
    required:true,
    default:Date.now
},
//employerContact:{
 //   type
//}
})

module.exports = mongoose.model('employee',employeeSchema)