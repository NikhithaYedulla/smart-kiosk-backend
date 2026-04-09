require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// 1. Middleware
app.use(cors());
app.use(express.json());

// 2. MongoDB Connection
// On Render, we will set MONGO_URI in the dashboard.
// Locally, it will fall back to your compass string if the .env is missing.
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/smartKiosk";

mongoose.connect(mongoURI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// 3. Health Check Route (Important for Render)
app.get('/health', (req, res) => {
    res.status(200).send('Server is healthy!');
});

// 4. Your API Routes (Example)
app.get('/', (req, res) => {
    res.send('SmartKiosk Backend is Running!');
});

// 5. Port Binding (The most important part for Render)
// Render assigns a random port via process.env.PORT. 
// We must use 0.0.0.0 to allow external connections.
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🔥 Server is live on port ${PORT}`);
});