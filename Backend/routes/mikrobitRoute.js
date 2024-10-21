const express = require("express");
const {
  mikrobitController,
  getAllMikrobits,
  getFilteredData
} = require("../controllers/mikrobitController");

const router = express.Router();

router.post("/mikrobit", mikrobitController);
router.get("/mikrobit", getAllMikrobits);
router.get("/mikrobit/search", getFilteredData);

module.exports = router;
