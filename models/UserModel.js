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
    }
});

module.exports = mongoose.model('User', schema);