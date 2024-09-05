const SOS = require("../models/sos");
const Message = require("../models/message");

exports.getAllSOS = async (req, res) => {
  try {
    const sosReports = await SOS.find();

    res
      .status(200)
      .json({ message: "SOS data retrieved successfully", data: sosReports });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching SOS data", error: error.message });
  }
};

exports.getMessagesByUser = async (req, res) => {
  try {
    const messages = await Message.find();

    res
      .status(200)
      .json({ message: "Messages retrieved successfully", data: messages });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching messages", error: error.message });
  }
};
