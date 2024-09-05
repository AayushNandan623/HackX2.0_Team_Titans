const axios = require("axios");
const Alert = require("../models/controllerAlerts");

const parseDateWithIST = (dateString) => {
  return new Date(dateString.replace("IST", "GMT+0530"));
};

const createAllAlters = async (req, res) => {
  try {
    const response = await axios.get(
      "https://sachet.ndma.gov.in/cap_public_website/FetchAllAlertDetails"
    );
    const alerts = response.data;

    const alertIdentifiers = alerts.map((alert) => alert.identifier);

    const existingIdentifiers = await Alert.find({
      identifier: { $in: alertIdentifiers },
    }).distinct("identifier");

    const newAlerts = alerts
      .filter((alert) => !existingIdentifiers.includes(alert.identifier))
      .map((alert) => ({
        severity: alert.severity,
        identifier: alert.identifier,
        effective_start_time: parseDateWithIST(alert.effective_start_time),
        effective_end_time: parseDateWithIST(alert.effective_end_time),
        disaster_type: alert.disaster_type,
        area_description: alert.area_description,
        severity_level: alert.severity_level,
        type: alert.type,
        actual_lang: alert.actual_lang,
        warning_message: alert.warning_message,
        disseminated: alert.disseminated === "true",
        severity_color: alert.severity_color,
        alert_id_sdma_autoinc: alert.alert_id_sdma_autoinc,
        centroid: alert.centroid,
        alert_source: alert.alert_source,
        area_covered: alert.area_covered,
        sender_org_id: alert.sender_org_id,
      }));

    const savedAlerts = await Alert.create(newAlerts);

    res.status(200).json({
      message: "Alerts fetched and saved successfully",
      savedAlerts: savedAlerts,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching and saving alerts",
      error: error.message,
    });
  }
};

const getAllAlters = async (req, res) => {
  try {
    const { area_description } = req.query;
    const severityOrder = {
      red: 1,
      orange: 2,
      yellow: 3,
      green: 4,
    };

    const queryObject = {};
    if (area_description) {
      queryObject.area_description = {
        $regex: area_description,
        $options: "i",
      };
    }

    const existingIdentifiers = await Alert.find(queryObject, {
      area_description: 1,
      disaster_type: 1,
      warning_message: 1,
      severity_color: 1,
      alert_source: 1,
      identifier: 1,
      effective_start_time: 1,
    })
      .sort({
        effective_start_time: -1,
      })
      .limit(1);
    const sortedBySeverity = existingIdentifiers.sort((a, b) => {
      return (
        (severityOrder[a.severity_color] || 5) -
        (severityOrder[b.severity_color] || 5)
      );
    });

    const topAlert = sortedBySeverity[0];
    res.status(200).json({ alert: topAlert, nbHits: sortedBySeverity.length });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching alerts",
      error: error.message,
    });
  }
};
module.exports = {
  getAllAlters,
  createAllAlters,
};
