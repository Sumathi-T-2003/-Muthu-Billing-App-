const express = require("express");
const Shop = require("../models/Shop");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const shop = new Shop({
      shopName: req.body.shopName,
      expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
    });
    await shop.save();
    res.json({ message: "Shop Created Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
