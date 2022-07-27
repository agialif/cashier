const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stocks: {
        type: Number,
        required: true
    }
})

var Product = mongoose.model('Product', productSchema)

module.exports = Product
