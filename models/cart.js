const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    products: [Object]
});

const Cart = mongoose.model('Cart', cartSchema);


module.exports = Cart