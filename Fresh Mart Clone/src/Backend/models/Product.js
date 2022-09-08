const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    Product: {
        type: String,
        required: true,
        trim: true
    },
    Category: {
        type: String,
        required: true,
        trim: true
    },
    Price: {
        type: String,
        required: true,
    },
    Image: {
        type: String,

    }
}, {
    timestamps: true
})

const ProductModel = mongoose.model('Product', Product)

module.exports = ProductModel