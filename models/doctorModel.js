const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Doctor should have a name"],
  },
  specilization: {
    type: String,
    required: [true, "Doctor should have a specilization"],
  },
  arriveTime: {
    type: String,
    required: [true, "Doctor should have arrival time"],
  },
  departTime: {
    type: String,
    required: [true, "Doctor should have depart time"],
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);
