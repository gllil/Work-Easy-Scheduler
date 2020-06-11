const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    accessType:{
        type:String,
        required: true,
        default:"admin"
    }
    
});

module.exports = User = mongoose.model("User", UserSchema);