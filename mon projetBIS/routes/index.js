let express = require("express");
let router = express.Router();

router.get("/:forms-:numForm(\\d+):level", (req, res) => {
  res.send(req.query.level + " " + req.params.numForm);
  console.log(req.params.numForm);
  console.log(req.query.level);
});

router.post("/:forms", (req, res) => {
  res.send(req.body.username);
  console.log(req.body.username);
});

module.exports = router;
