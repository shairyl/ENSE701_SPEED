const mongoose = require("mongoose");

const AnalystSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  journal: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  volume: {
    type: Number,
    required: true
  },
  numberOfPages: {
    type: Number,
    required: true
  },
  DOI: {
    type: String,
    required: true
  },
  claims: {
    type: String,
    required: true
  },
  methodology: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("AnalystSchema", AnalystSchema);
