require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const routerAlert = require("./src/routes/alertRoute");
const userDataRoutes = require("./src/routes/userDataRoutes");
const chatbotRoutes = require("./src/routes/chatbotRoutes");
const sosRoutes = require("./src/routes/sosRoutes");
const messageRoute = require("./src/routes/messageRoute");
const path = require("path");
const connectDB = require("./src/db/connection");
app.use("./uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/v1/alerts", routerAlert);
app.use("/api/v1/routeUserData", userDataRoutes);
app.use("/api/v1/chatBot", chatbotRoutes);
app.use("/api/v1/sos", sosRoutes);
app.use("/api/v1/messages", messageRoute);
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
