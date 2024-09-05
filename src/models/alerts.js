const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  severity: { type: String, required: true },
  identifier: { type: Number, required: true, unique: true },
  effective_start_time: { type: Date, required: true },
  effective_end_time: { type: Date, required: true },
  disaster_type: { type: String, required: true },
  area_description: { type: String, required: true },
  severity_level: { type: String, required: true },
  type: { type: Number, required: true },
  actual_lang: { type: String },
  warning_message: { type: String, required: true },
  disseminated: { type: Boolean, required: true },
  severity_color: {
    type: String,
    required: true,
    enum: ["yellow", "orange", "red"],
  },
  alert_id_sdma_autoinc: { type: Number, required: true },
  centroid: { type: String, required: true },
  alert_source: { type: String, required: true },
  area_covered: { type: Number, required: true },
  sender_org_id: { type: String, required: true },
});

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;
