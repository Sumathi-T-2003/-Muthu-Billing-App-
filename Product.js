const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  invoiceNo: String,
  invoiceDate: String,
  billTo: String,
  shipTo: String,
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  rate: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  taxAmount: { type: Number },
  totalAmount: { type: Number },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Product", ProductSchema);