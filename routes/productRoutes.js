const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

/* ADD PRODUCT */
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* GET PRODUCTS */
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

/* DELETE */
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
