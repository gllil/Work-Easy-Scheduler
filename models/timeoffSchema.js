const mongoose = require('mongoose')


const timeoffSchema = new mongoose.Schema({
employeeName:{
    type:String
},
date:{
    type:Date
},
startTime:{
    type:Number
},
stopTime:{
    type:Number
},
status:{
    type:Boolean
},

})

module.exports = mongoose.model('timeoff',timeoffSchema)