import express from "express";
import User from "../models/User.js";
const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: "Phone number already exists or server error" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ phone: req.body.phone });
    if (!user || user.password !== req.body.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;