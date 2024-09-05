const express = require("express");
const router = express.Router();
const {
  getAllSOS,
  getMessagesByUser,
} = require("../controllers/partnerController");

router.get("/sos", getAllSOS);

router.get("/messages", getMessagesByUser);

module.exports = router;
