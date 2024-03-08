// models/cart.js
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
