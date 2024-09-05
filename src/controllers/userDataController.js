const UserData = require("../models/userData");
const emergencyKeywords = {
  flood: ["flood", "water", "inundation", "overflow", "drowning"],
  earthquake: ["earthquake", "tremor", "quake", "seismic"],
  cyclone: ["cyclone", "hurricane", "storm", "typhoon", "whirlwind"],
  landslide: ["landslide", "rockslide", "mudslide", "debris", "slip"],
  avalanche: ["avalanche", "snowfall", "snowslide", "icefall"],
  wildfire: ["fire", "flame", "burning", "wildfire", "bushfire"],
  heatwave: ["heatwave", "heat", "scorching", "boiling", "hot"],
  coldwave: ["coldwave", "cold", "chill", "frost", "freezing", "subzero"],
  heavy_rainfall: [
    "rain",
    "heavy rainfall",
    "downpour",
    "storm",
    "precipitation",
  ],
};

const categorizeData = (data) => {
  const tokens = data
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .split(/\s+/);

  const categories = {};

  Object.keys(emergencyKeywords).forEach((category) => {
    emergencyKeywords[category].forEach((keyword) => {
      if (tokens.includes(keyword)) {
        if (!categories[category]) {
          categories[category] = 0;
        }
        categories[category]++;
      }
    });
  });

  return categories;
};

exports.createUserData = async (req, res) => {
  try {
    const { userID, data, latitude, longitude } = req.body;

    if (!req.file || !userID || !data || !latitude || !longitude) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const categorizedData = categorizeData(data);
    const newUserData = new UserData({
      userID,
      data,
      imagePath: req.file.path,
      location: {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      },
      categories: categorizedData,
    });

    const savedUserData = await newUserData.save();
    const emergencyReport = await UserData.aggregate([
      {
        $group: {
          _id: "$categories",
          count: { $sum: 1 },
        },
      },
      {
        $sort: { count: -1 },
      },
    ]);

    res.status(201).json({
      message: "User data created successfully",
      data: savedUserData,
      insights: emergencyReport,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user data", error: error.message });
  }
};
