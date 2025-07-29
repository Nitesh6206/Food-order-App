// models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    type: String,
    meal: String,
    imageUrl: String
});

module.exports = mongoose.model('Item', ItemSchema);
