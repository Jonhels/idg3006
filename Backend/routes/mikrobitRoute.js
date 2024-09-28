const express = require("express");
const {
  mikrobitController,
  getAllMikrobits,
} = require("../controllers/mikrobitController");

const router = express.Router();

router.post("/mikrobit", mikrobitController);
router.get("/mikrobit", getAllMikrobits);

module.exports = router;
