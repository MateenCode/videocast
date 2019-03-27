const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// @route   GET api/subscription/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Subscription Works" }));

module.exports = router;
