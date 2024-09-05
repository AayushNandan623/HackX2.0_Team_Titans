const axios = require("axios");
 async function getAllAlters  (req, res) {
  try {
    const response = await axios.get(
      "https://sachet.ndma.gov.in/cap_public_website/FetchAllAlertDetails"
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error fetching data ",
      error: error.message,
    });
  }
};
module.exports = { getAllAlters };
