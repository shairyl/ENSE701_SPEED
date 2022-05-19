const mongoose = require("mongoose");

// make schema based on auto_increment ID, title, author, journal, year, volume, number of pages, DOI, claims, methodology
const AnalystSchema = new mongoose.Schema({

    information: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("analysts", AnalystSchema);
