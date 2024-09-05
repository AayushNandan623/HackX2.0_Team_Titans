
const express = require("express");
const {getAllAlters} = require("../controllers/controllerAlerts");
const router = express.Router();

router.route("/").get(getAllAlters);

module.exports = router;
