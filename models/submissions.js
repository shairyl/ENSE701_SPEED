const mongoose = require("mongoose");

// make schema based on auto_increment ID, title, author, journal, year, volume, number of pages, DOI, claims, methodology
const SubmissionSchema = new mongoose.Schema({
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
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("submissions", SubmissionSchema);
