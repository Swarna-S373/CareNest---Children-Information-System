const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  fatherName: { type: String,  default: "" },
  motherName: { type: String,  default: "" },
  mobile: { type: String, match: /^[0-9]{10}$/, required: true },
  address: { type: String, required: true },
  studentClass: { type: String, required: true },
  schoolName: { type: String, required: true },
  term1: { type: Number, min: 0, max: 100 },
  term2: { type: Number, min: 0, max: 100 },
  term3: { type: Number, min: 0, max: 100 },
  height: { type: Number, min: 0.5 },
  weight: { type: Number, min: 18, max: 100 },
});

module.exports = mongoose.model("Student", studentSchema);
