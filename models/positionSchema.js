const mongoose = require('mongoose')


const positionSchema = new mongoose.Schema({
firstname: ""
})

module.exports = mongoose.model('position',positionSchema)