const express = require("express");

const router = express.Router();

// import models/submissions
const submission = require("../../models/submissions");
const SPEED = require("../../models/SPEED");

router.get("/speed", (req, res) => {
  // request will contain the following: claim and methodology
  const { claim, methodology } = req.query;

  // find records with matching claim and methodology
  SPEED.find({ claim, methodology })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json({ error: `Unable to process your request" ${err}` });
    });
});

router.post("/speed", (req, res) => {
  SPEED.create(req.body)
    .then((article) => res.json({ msg: "Article added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: `Unable to add this article" ${err}` })
    );
});

router.post("/submission", (req, res) => {
  console.log("req: ", req.body);
  submission
    .create(req.body)
    .then((article) => res.json({ msg: "Article added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: `Unable to add this article" ${err}` })
    );

  // delete document if title is "test"
  submission
    .findOneAndDelete({
      title: "test",
      authors: "test",
      journal: "test",
      year: 2001,
      volume: 1,
      numberOfPages: 2,
      DOI: "test",
      claims: "test",
      methodology: "test"
    })
    .catch((err) =>
      res
        .status(400)
        .json({ error: `Unable to delete this article for testing" ${err}` })
    );
});

module.exports = router;
