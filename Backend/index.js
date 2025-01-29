const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const serverless = require("serverless-http");  // ✅ Required for Vercel

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: process.env.CLIENT_URL || "https://your-frontend-url.vercel.app",
  credentials: true,
};
app.use(cors(corsOptions));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Error:", err));

// Routes
const authRoutes = require("./routes/auth");
const menuRoutes = require("./routes/menu");

app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);

module.exports = app;
module.exports.handler = serverless(app);  // ✅ Vercel needs this
