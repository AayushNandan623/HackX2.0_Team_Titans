const mongoose = require("mongoose");

const sosSchema = new mongoose.Schema({
  userID: { type: String, required: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  emergencyType: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  resolved: { type: Boolean, default: false },
});

const SOS = mongoose.model("SOS", sosSchema);

module.exports = SOS;
