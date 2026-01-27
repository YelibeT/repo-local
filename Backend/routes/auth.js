// REGISTER
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      phone: req.body.phone
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: "Phone number already exists" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ phone: req.body.phone });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found. Please register!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});