const express = require("express");
const {
  getAllAlters,
  getAllFilteredAlters,
  createAllAlters,
} = require("../controllers/alertsController");
const router = express.Router();

router
  .route("/")
  .get(getAllFilteredAlters)
  .get(getAllAlters)
  .post(createAllAlters);
router.route("/all").get(getAllAlters);

module.exports = router;
