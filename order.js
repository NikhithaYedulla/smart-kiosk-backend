const mongoose = require("mongoose");

// Order schema with timestamps (createdAt and updatedAt)
const orderSchema = new mongoose.Schema({
  fromUsername: { type: String, required: true },
  items: { type: Array, required: true },
  total: { type: Number, required: true },
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;