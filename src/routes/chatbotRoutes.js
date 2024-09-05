const express = require("express");
const getResponse = require("../controllers/chatBotController");

const router = express.Router();

router.post("/", getResponse);

module.exports = router;
