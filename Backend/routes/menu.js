// routes/menu.js
const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/', async (req, res) => {
    try {
        const menu = await Item.find();
        res.json({ menu });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch menu' });
    }
});

module.exports = router;
