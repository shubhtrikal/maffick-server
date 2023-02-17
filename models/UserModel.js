const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        requires : true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber : {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    city : {
        type: String,
        required: true,
    },
    event1 : {
        type : String,
        default : "Not Registered"
    },
    event2 : {
        type : String,
        default : "Not Registered"
    },
    event3 : {
        type : String,
        default : "Not Registered"
    },
    event4 : {
        type : String,
        default : "Not Registered"
    },
    event5 : {  
        type : String,
        default : "Not Registered"
    },
});

module.exports = mongoose.model('User', schema);