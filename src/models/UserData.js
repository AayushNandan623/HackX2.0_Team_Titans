const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  data: { type: String, required: true },
  imagePath: { type: String },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  categories: { type: Map, of: Number },
  createdAt: { type: Date, default: Date.now },
});

const UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;
