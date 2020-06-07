const mongoose = require('mongoose')


const shiftsSchema = new mongoose.Schema({

    employeeName:{
        type:String,
        required:true
    },
    date:{
        type:Date,
    },
    startTime:{
        type:Number,
    },
    stopTime:{
        type:Number,
    }

})
module.exports = mongoose.model('shifts',shiftsSchema)