var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var clientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: null
    }
})

var Client = mongoose.model('Client', clientSchema)

module.exports = Client