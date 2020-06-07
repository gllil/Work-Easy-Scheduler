const mongoose = require('mongoose')


const resumeSchema = new mongoose.Schema({
    employer:{
        type:String,
    },
    jobDescription:{
        type:String,
    },
    employmentDates:[{
        startDate:{
            type:Date
        },
        endDate:{
            type:String
        },
    }],
    employerContact:[{
        managerName:{
            type:String
        },
        contactphoneNumber:{
            type:Number
        }

    }]

})

module.exports = mongoose.model('resume',resumeSchema)