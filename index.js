require("dotenv").config();
const express = require("express");
const router = require("./src/routes/routeAlert");
const connectDB = require("./src/db/connect");
const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/v1/alerts", router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`App is running on port : ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();

