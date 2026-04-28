const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Schema
const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  customerReviewCount: Number,
});

const Item = mongoose.model("Item", itemSchema);

// GET all items
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// ADD item
router.post("/", async (req, res) => {
  try {
    const { name, price, customerReviewCount } = req.body;

    const item = new Item({
      name,
      price,
      customerReviewCount,
    });

    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;