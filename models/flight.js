const mongoose = require('mongoose')
const Schema = mongoose.Schema

const destinationScema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date
    }
})
const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
   flightNo: {
    type: Number,
    minlength: 10,
    maxlength: 9999
   },
   departs: {
    type: Date,
    default: function() {
        date = new Date().getFullYear() + 1
        return date
    }
   },
   destinations: [destinationScema]
})


module.exports = mongoose.model('Flight', flightSchema)