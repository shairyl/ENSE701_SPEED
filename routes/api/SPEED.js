const express = require("express");

const router = express.Router();

//import models/analysts
//import models/submissions
const submission = require("../../models/submissions");
const analyst = require("../../models/analysts");


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

router.post("/analyst", (req, res) => {
  console.log("req: ", req.body);
  analyst
    .create(req.body)
    .then((article) => res.json({ msg: "Information Published successfully" }))
    .catch((err) =>
      res.status(400).json({ error: `Unable to Publish" ${err}` })
    );

  // delete document if title is "test"
  analyst
    .findOneAndDelete({
      information: "test"
    })
    .catch((err) =>
      res
        .status(400)
        .json({ error: `Unable to delete this article for testing" ${err}` })
    );
});

module.exports = router;
