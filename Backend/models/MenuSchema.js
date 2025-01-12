const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:5000/Items', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Connection error:', err);
});

const ItemSchema = mongoose.Schema({
    item: {
        type: String, 
        required: true,
        maxlength: 200, 
    },
    price: {
        type: Number,
        required: true, 
    },
    available: { 
        type: Boolean,
        required: true,
        default: true
    }
});

const Item = mongoose.model('Item', ItemSchema); 

module.exports = Item;
