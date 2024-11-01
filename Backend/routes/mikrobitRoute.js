const express = require("express");
const {
  mikrobitController,
  getAllMikrobits,
  getFilteredData,
} = require("../controllers/mikrobitController");

const router = express.Router();

// Route to create new Mikrobit data (POST)
router.post("/mikrobit", mikrobitController);

// Route to get all Mikrobit data (GET)
router.get("/mikrobit", getAllMikrobits);

// Route to filter Mikrobit data based on query parameters (GET)
router.get("/mikrobit/search", getFilteredData);

// Export the router
module.exports = router;
