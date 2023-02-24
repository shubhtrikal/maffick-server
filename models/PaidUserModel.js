const mongoose = require('mongoose')
const Schema = mongoose.Schema

const paidUserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    Url : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Url'
    },
    status: {
        type: String, // normal vip vvip
        default: 'normal'
    },
})  

module.exports = mongoose.model('PaidUser', paidUserSchema)
