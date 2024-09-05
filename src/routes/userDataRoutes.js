const express = require("express");
const router = express.Router();
const userDataController = require("../controllers/userDataController");
const upload = require("../config/multerConfig");

router.post("/", upload.single("image"), userDataController.createUserData);

module.exports = router;
