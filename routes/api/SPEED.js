const express = require("express");

const router = express.Router();

// import models/submissions
const submission = require("../../models/submissions");
const SPEED = require("../../models/SPEED");
const analyst = require("../../models/analyst");

router.get("/speed", (req, res) => {
  // request will contain the following: claim and methodology
  const { claims, methodology } = req.query;

  // find records with matching claim and methodology
  SPEED.find({ claims, methodology })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json({ error: `Unable to process your request" ${err}` });
    });
});

// creates a new analyst record
router.get("/analyst", (req, res) => {
  analyst
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json({ error: `Unable to process your request" ${err}` });
    });
});

// creates a new analyst record
router.post("/analyst", (req, res) => {
  analyst
    .create(req.body)
    .then((article) => res.json({ msg: "Article added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: `Unable to add this article" ${err}` })
    );

  // delete document if title is "test"
  analyst
    .findOneAndDelete({
      title: "test",
      authors: "test",
      journal: "test",
      year: 2001,
      volume: 1,
      numberOfPages: 2,
      DOI: "test",
      claims: "test",
      methodology: "test",
      name: "test",
      email: "test"
    })
    .catch((err) =>
      res
        .status(400)
        .json({ error: `Unable to delete this article for testing" ${err}` })
    );
});

// delete a submission after a analyst rejects it
router.delete("/analyst", (req, res) => {
  // request will contain the following: claim and methodology
  // delete submission wherever ID matches
  const { id } = req.query;
  analyst
    .findByIdAndDelete(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json({ error: `Unable to process your request" ${err}` });
    });
});

// Gets all submissions for the moderator to moderate
router.get("/moderator", (req, res) => {
  // request will contain the following: claim and methodology
  // grab all submissions from SPEED
  submission
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json({ error: `Unable to process your request" ${err}` });
    });
});

// delete a submission after a moderator rejects it
router.delete("/moderator", (req, res) => {
  // request will contain the following: claim and methodology
  // delete submission wherever ID matches
  const { id } = req.query;
  submission
    .findByIdAndDelete(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json({ error: `Unable to process your request" ${err}` });
    });
});

// gets all fields for the search page
router.get("/speed/fields", (req, res) => {
  // find all claims and methodologies
  SPEED.find({}, { claims: 2, methodology: 2, _id: 0 }).then((data) => {
    res.json(data);
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
      methodology: "test",
      name: "test",
      email: "test"
    })
    .catch((err) =>
      res
        .status(400)
        .json({ error: `Unable to delete this article for testing" ${err}` })
    );
});

module.exports = router;
