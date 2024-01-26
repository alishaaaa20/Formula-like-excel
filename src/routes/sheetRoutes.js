const express = require("express");
const { handleSheetAction } = require("../controllers/sheetController");

const router = express.Router();

// Example route to handle sheet actions
router.post("/sheet/action", handleSheetAction);

module.exports = router;
