// set up server js
// app.js

const express = require("express");
const config = require("config");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();

connectDB();
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

if (process.env.env === "prod") {
  app.use(express.static(path.join(__dirname, "frontend/build")));

  // any request that is not caught by the above routes, send back index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running!");
  });
}

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
