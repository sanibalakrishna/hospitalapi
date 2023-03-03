const { default: mongoose } = require("mongoose");
const Doctor = require("../models/doctorModel");

// get all doctors
const getAllDoctors = async (req, res) => {
  const doctor = await Doctor.find();
  res.status(200).json(doctor);
};

// get a specific doctor
const getDoctor = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "no such doctor found" });
  }
  const doctor = await Doctor.findById(id);
  if (!doctor) {
    return res.status(404).json({ message: "no such doctor found" });
  }
  res.status(200).json(doctor);
};

// create a doctor
const createDoctor = async (req, res) => {
  const { name, specilization, arriveTime, departTime } = req.body;
  const emptyfiels = [];
  if (!name) {
    emptyfiels.push("name");
  }
  if (!specilization) {
    emptyfiels.push("specilization");
  }
  if (!arriveTime) {
    emptyfiels.push("arriveTime");
  }
  if (!departTime) {
    emptyfiels.push("departTime");
  }

  if (emptyfiels.length > 0) {
    return res
      .status(400)
      .json({ message: "Please fill all the fields", fields: emptyfiels });
  }

  try {
    const doctor = new Doctor({ name, specilization, arriveTime, departTime });
    doctor.save();
    res.status(200).json(doctor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// update a doctor
const updateDoctor = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "no such doctor found" });
  }
  const doctor = await Doctor.findOneAndUpdate({ _id: id }, req.body);
  if (!doctor) {
    return res.status(404).json({ message: "no such doctor found" });
  }
  res.status(200).json(doctor);
};

// delete a doctor
const deleteDoctor = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "no such doctor found" });
  }
  const doctor = await Doctor.findOneAndDelete({ _id: id });
  if (!doctor) {
    return res.status(404).json({ message: "no such doctor found" });
  }
  res.status(200).json(doctor);
};

module.exports = {
  getDoctor,
  createDoctor,
  getAllDoctors,
  updateDoctor,
  deleteDoctor,
};
