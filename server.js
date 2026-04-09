// 1. MUST be the very first line of your file
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // Force Google DNS

require('dotenv').config();
// ... rest of your code
require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// 2. Use the variable from your .env file
const DB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3000;

// 3. Connect to MongoDB using the variable
mongoose.connect(DB_URI)
  .then(() => console.log("✅ Successfully connected to SmartKiosk Database"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});