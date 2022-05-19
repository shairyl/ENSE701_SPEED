const mongoose = require("mongoose");

// make schema based on auto_increment ID, information
const AnalystSchema = new mongoose.Schema({

    information: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("analysts", AnalystSchema);
