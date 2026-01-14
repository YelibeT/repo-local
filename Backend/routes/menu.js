const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const MenuItem = require("../models/MenuItem");

// GET all categories
router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find({ active: true });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all menu items
router.get("/items", async (req, res) => {
  try {
    const items = await MenuItem.find({ available: true }).populate("category", "name");
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
