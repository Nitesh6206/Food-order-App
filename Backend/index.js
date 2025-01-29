const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const serverless = require('serverless-http'); // ✅ Required for Vercel

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
    origin: process.env.CLIENT_URL || "https://food-order-app-o381.vercel.app" || "http://localhost:3000",
    credentials: true,
};
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Import routes
const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');

app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);

// ✅ Vercel does NOT need `app.listen(PORT)`, instead export the app:
module.exports = app;
module.exports.handler = serverless(app);  // ✅ Required for Vercel
