const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  available: { type: Boolean, default: true },
  addons: [
    {
      name: String,
      price: Number,
    },
  ],
});

module.exports = mongoose.model("MenuItem", menuItemSchema);
