const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
  shopName: { type: String, required: true },
  expiryDate: { type: Date, required: true }
});

module.exports = mongoose.model("Shop", shopSchema);
