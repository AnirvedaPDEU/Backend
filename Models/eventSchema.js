const mongoose = require('mongoose')

const Schema = mongoose.Schema

const eventModel = new Schema ({
    Name: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now()
    },
    Timing: {
        type: String,
        required: true
    },
    Venue: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Event', eventModel)