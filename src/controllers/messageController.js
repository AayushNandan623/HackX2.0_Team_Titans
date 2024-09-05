const Message = require("../models/message");

exports.sendMessage = async (req, res) => {
  try {
    const { senderID, receiverID, message } = req.body;

    if (!senderID || !receiverID || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMessage = new Message({
      senderID,
      receiverID,
      message,
    });

    const savedMessage = await newMessage.save();

    notifyReceiver(savedMessage);

    res
      .status(201)
      .json({ message: "Message sent successfully", data: savedMessage });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error sending message", error: error.message });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const { userID, contactID } = req.query;

    if (!userID || !contactID) {
      return res
        .status(400)
        .json({ message: "Both userID and contactID are required" });
    }

    const messages = await Message.find({
      $or: [
        { senderID: userID, receiverID: contactID },
        { senderID: contactID, receiverID: userID },
      ],
    }).sort({ timestamp: 1 });

    res.status(200).json({ data: messages });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching messages", error: error.message });
  }
};

const notifyReceiver = (messageData) => {
  console.log("Notify receiver with message data:", messageData);
};
