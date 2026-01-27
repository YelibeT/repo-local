import express from "express";
import Order from "../models/Order.js";
import Menu from "../models/Menu.js";

const router = express.Router();

// POST: Place a new order
router.post("/", async (req, res) => {
  try {
    const { items, customerName, customerPhone } = req.body;

    // Fetch items from DB to ensure prices are accurate and not tampered with
    const itemIds = items.map(i => i.menuItem);
    const dbItems = await Menu.find({ _id: { $in: itemIds } });

    let calculatedTotal = 0;
    const finalItems = items.map(cartItem => {
      const dbItem = dbItems.find(d => d._id.toString() === cartItem.menuItem);
      if (!dbItem) throw new Error("Item not found");

      calculatedTotal += dbItem.price * cartItem.quantity;
      return {
        menuItem: dbItem._id,
        name: dbItem.name,
        price: dbItem.price,
        quantity: cartItem.quantity
      };
    });

    const order = new Order({
      items: finalItems,
      customerName,
      customerPhone,
      totalPrice: calculatedTotal
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET: Fetch orders for a specific phone number
router.get("/my-orders", async (req, res) => {
  try {
    const { phone } = req.query;
    if (!phone) return res.status(400).json({ message: "Phone required" });

    const orders = await Order.find({ 
      customerPhone: phone, 
      status: "pending" 
    }).sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE or PATCH: Cancel an order
router.patch("/cancel/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    
    if (!order) return res.status(404).json({ message: "Order not found" });
    
    // Only allow cancellation if order is still pending
    if (order.status !== "pending") {
      return res.status(400).json({ message: "Cannot cancel an order that is already completed." });
    }

    order.status = "cancelled";
    await order.save();
    res.json({ message: "Order cancelled successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update existing order (works for quantity edits AND adding new items)
router.put("/update/:id", async (req, res) => {
  try {
    const { items } = req.body; // Expecting the full updated list of items
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ message: "Order not found" });
    if (order.status !== "pending") {
      return res.status(400).json({ message: "Order is already being prepared and cannot be changed." });
    }

    // Recalculate total price based on the new items list
    const newTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    order.items = items;
    order.totalPrice = newTotal;
    
    await order.save();
    res.json({ message: "Order updated successfully", order });
  } catch (err) {
    res.status(500).json({ message: "Server error during update" });
  }
});

export default router;