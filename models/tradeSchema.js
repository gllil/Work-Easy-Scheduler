const mongoose = require('mongoose')

const tradeSchema = new mongoose.Schema({
source: {
    type: String,
    required: true
},                                                      
date:{
    type:Date,
},
startTime:{
    type:Number
},
stopTime:{
    type:Number,
},
targetName:{
    type:String,
    required:true
},
status:{
    type:Boolean

}
})


module.exports = mongoose.model('trade',tradeSchema)