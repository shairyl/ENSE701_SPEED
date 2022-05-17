const express = require("express");

const router = express.Router();

// import models/submissions
const submission = require("../../models/submissions");

router.post("/submission", (req, res) => {
  console.log("req: ", req.body);
  submission
    .create(req.body)
    .then((article) => res.json({ msg: "Article added successfully" }))
    .catch((err) =>
      res.status(400).json({ error: `Unable to add this article" ${err}` })
    );
});

module.exports = router;
