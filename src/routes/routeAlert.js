const express = require("express");
const {
  getAllAlters,
  createAllAlters,
} = require("../controllers/controllerAlerts");
const router = express.Router();

router.route("/").get(getAllAlters).post(createAllAlters);

module.exports = router;
