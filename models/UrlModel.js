const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    status: {
        type: String, // normal vip vvip
        default: 'normal'
    },
    entry: {
        type : Boolean,
        default: false
    },
})

module.exports = mongoose.model('Url', urlSchema)