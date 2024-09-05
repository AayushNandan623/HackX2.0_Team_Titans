const UserData = require("../models/userData");
exports.createUserData = async (req, res) => {
  try {
    const { userID, data, latitude, longitude } = req.body;

    if (!req.file || !userID || !data || !latitude || !longitude) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUserData = new UserData({
      userID,
      data,
      imagePath: req.file.path,
      location: {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      },
    });

    const savedUserData = await newUserData.save();
    res
      .status(201)
      .json({ message: "User data created successfully", data: savedUserData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user data", error: error.message });
  }
};
