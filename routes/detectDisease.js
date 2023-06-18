const express = require("express");
const router = express.Router();
const { detectHeartDisease } = require("../controller/detectDisease");

// **Actual Routes
router.post("/detect-heart-disease", detectHeartDisease);

module.exports = router;
