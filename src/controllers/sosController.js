const SOS = require("../models/sos");

exports.createSOS = async (req, res) => {
  try {
    const { userID, latitude, longitude, emergencyType, message } = req.body;

    if (!userID || !latitude || !longitude || !emergencyType || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newSOS = new SOS({
      userID,
      location: {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      },
      emergencyType,
      message,
    });

    const savedSOS = await newSOS.save();

    notifyResponders(savedSOS);

    res
      .status(201)
      .json({ message: "SOS request sent successfully", data: savedSOS });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error sending SOS request", error: error.message });
  }
};

const notifyResponders = (sosData) => {

  console.log("Notify responders with SOS data:", sosData);
};
