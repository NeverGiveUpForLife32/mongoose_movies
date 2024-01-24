const mongoose = require("mongoose");

const performerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthDate: { type: String, required: true },
  credits: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
});

const Performer = mongooser.model("Performer", performerSchema);

modules.exports = Performer;
