const mongoose = require('mongoose');
const { Schema } = mongoose;

const product = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
      },
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    price: {
        type: String,
        required: [true, 'Please add a price'],
    },
    image: {
        type: String,
        required: [true, 'Please add a image'],
    },
    quantity: {
        type: String,
        required: [true, 'Please add a quantity'],
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('product', product);
