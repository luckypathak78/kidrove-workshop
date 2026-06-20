const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, phone } = req.body;

  // Validation
  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Registration successful 🎉",
  });
});

module.exports = router;