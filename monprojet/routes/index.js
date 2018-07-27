let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  console.log("Index sans paramètres.");
  res.render("index", { title: "Express sans paramètres" });
});

/* GET home page. */
router.get("/forms-:id", (req, res, next) => {
  console.log(`GET - Paramètre via params : ${req.params.id}`);
  console.log(`GET - Paramètre via query : ${req.query.level}`);
  res.render("index", {
    title: "Express avec paramètres",
    id: req.params.id,
    level: req.query.level
  });
});

/* GET home page. */
router.post("/forms-:id", (req, res, next) => {
  console.log(`POST : ${req.body.name}`);
  res.render("index", {
    title: "Express avec paramètres et POST",
    id: req.params.id,
    level: req.query.level,
    user: req.body.name
  });
});

router.get(
  "/superMiddleware",
  (req, res, next) => {
    console.log("hello middleware.");
    next();
  },
  function(req, res, next) {
    res.send("hello world");
  }
);

module.exports = router;
