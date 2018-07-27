let express = require("express");
let router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "tmp/" });

//send email

// GET users listing.
router.get("/", (req, res) => {
  res.send("Hey ! It's a GET");
});

// GET user with ID.
router.get("/:id(\\d+)", (req, res) => {
  res.send("Hey ! It's a GET with ID " + req.params.id);
});

//POST user creation.
router.post("/", (req, res) => {
  res.send("Hey ! It's a POST");
});

router.put("/:name", (req, res) => {
  res.send("Hey my name is" + req.params.name);
});

//////////// GET DELETE //////////////

router.get("/:prenom([a-zA-Z]+)", (req, res) => {
  res.render("update-user");
});

router.put("/:prenom([a-zA-Z]+)", (req, res) => {
  res.send("The new name is" + req.body.prenom);
});

router.get("/:id(\\d+)", (req, res) => {
  res.render("delete-user");
});

router.delete("/:id(\\d+)", (req, res) => {
  res.send("No more user with id" + req.body.id);
});

module.exports = router;
