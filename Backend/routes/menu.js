// routes/menu.js
const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

// Protected Route to Get Menu Items
router.get('/', auth, (req, res) => {
    const menu = [
        { id: 1, name: 'Masala Dosa', price: 150, type: 'Veg', meal: 'Breakfast', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Aloo Paratha', price: 120, type: 'Veg', meal: 'Breakfast', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Puri Bhaji', price: 100, type: 'Veg', meal: 'Breakfast', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Chole Bhature', price: 180, type: 'Veg', meal: 'Breakfast', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Idli Sambar', price: 110, type: 'Veg', meal: 'Breakfast', imageUrl: 'https://via.placeholder.com/150' },

    { id: 6, name: 'Paneer Butter Masala', price: 300, type: 'Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Veg Biryani', price: 250, type: 'Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Rajma Chawal', price: 180, type: 'Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Dal Tadka', price: 150, type: 'Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Aloo Gobi', price: 140, type: 'Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },

    { id: 11, name: 'Chicken Biryani', price: 350, type: 'Non-Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Butter Chicken', price: 400, type: 'Non-Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Fish Curry', price: 450, type: 'Non-Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Egg Curry', price: 200, type: 'Non-Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Mutton Rogan Josh', price: 480, type: 'Non-Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },

    { id: 16, name: 'Paneer Tikka', price: 350, type: 'Veg', meal: 'Dinner', imageUrl: 'https://via.placeholder.com/150' },
    { id: 17, name: 'Baingan Bharta', price: 180, type: 'Veg', meal: 'Dinner', imageUrl: 'https://via.placeholder.com/150' },
    { id: 18, name: 'Palak Paneer', price: 320, type: 'Veg', meal: 'Dinner', imageUrl: 'https://via.placeholder.com/150' },
    { id: 19, name: 'Malai Kofta', price: 340, type: 'Veg', meal: 'Dinner', imageUrl: 'https://via.placeholder.com/150' },
    { id: 20, name: 'Kadhai Paneer', price: 310, type: 'Veg', meal: 'Dinner', imageUrl: 'https://via.placeholder.com/150' },

    { id: 21, name: 'Tandoori Chicken', price: 450, type: 'Non-Veg', meal: 'Dinner', imageUrl: 'https://via.placeholder.com/150' },
    { id: 22, name: 'Mutton Biryani', price: 480, type: 'Non-Veg', meal: 'Dinner', imageUrl: 'https://via.placeholder.com/150' },
    { id: 23, name: 'Prawn Curry', price: 500, type: 'Non-Veg', meal: 'Dinner', imageUrl: 'https://via.placeholder.com/150' },
    { id: 24, name: 'Chicken 65', price: 320, type: 'Non-Veg', meal: 'Dinner', imageUrl: 'https://via.placeholder.com/150' },
    { id: 25, name: 'Fish Fry', price: 400, type: 'Non-Veg', meal: 'Dinner', imageUrl: 'https://via.placeholder.com/150' },

    { id: 26, name: 'Poha', price: 100, type: 'Veg', meal: 'Breakfast', imageUrl: 'https://via.placeholder.com/150' },
    { id: 27, name: 'Uttapam', price: 140, type: 'Veg', meal: 'Breakfast', imageUrl: 'https://via.placeholder.com/150' },
    { id: 28, name: 'Upma', price: 120, type: 'Veg', meal: 'Breakfast', imageUrl: 'https://via.placeholder.com/150' },
    { id: 29, name: 'Methi Thepla', price: 130, type: 'Veg', meal: 'Breakfast', imageUrl: 'https://via.placeholder.com/150' },
    { id: 30, name: 'Sabudana Khichdi', price: 140, type: 'Veg', meal: 'Breakfast', imageUrl: 'https://via.placeholder.com/150' },

    { id: 31, name: 'Chicken Curry', price: 350, type: 'Non-Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
    { id: 32, name: 'Keema Naan', price: 200, type: 'Non-Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
    { id: 33, name: 'Kheema Pav', price: 150, type: 'Non-Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
    { id: 34, name: 'Prawn Biryani', price: 480, type: 'Non-Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
    { id: 35, name: 'Goan Fish Curry', price: 500, type: 'Non-Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },

    { id: 36, name: 'Dal Makhani', price: 220, type: 'Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
    { id: 37, name: 'Chana Masala', price: 150, type: 'Veg', meal: 'Lunch', imageUrl: 'https://via.placeholder.com/150' },
    { id: 38, name: 'Chicken Tikka Masala', price: 13.49, type: 'Non-Veg', meal: 'Dinner', imageUrl: 'https://via.placeholder.com/150' },
    ];

    res.json({ menu }); // Sending a JSON response
});

module.exports = router;
