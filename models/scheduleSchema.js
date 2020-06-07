const mongoose = require('mongoose')

const scheduleSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
monday: {
    timeStart:{
        type: Number
    },
    timeStop: {
        type: Number
    }
},
tuesday: {
    timeStart:{
        type: Number
    },
    timeStop: {
        type: Number
    }
},
wednesday:{
    timeStart:{
        type: Number
    },
    timeStop: {
        type: Number
    }
},
thursday:{
    timeStart:{
        type: Number
    },
    timeStop: {
        type: Number
    }
},
friday:{
    timeStart:{
        type: Number
    },
    timeStop: {
        type: Number
    }
    
},
saturday:{
    timeStart:{
        type: Number
    },
    timeStop: {
        type: Number
    }
},
sunday:{
    timeStart:{
        type: Number
    },
    timeStop: {
        type: Number
    }
}
})


module.exports = mongoose.model('schedule',scheduleSchema)