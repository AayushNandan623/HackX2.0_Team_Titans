require("dotenv").config();
const express = require("express");
const router = require("./src/routes/routeAlert");

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/v1/alerts", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
