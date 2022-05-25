const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    price:  { type: String, required: true },
    image: { type: Buffer, required: true }
});

const Product = mongoose.model('Products', productSchema);


module.exports = Product