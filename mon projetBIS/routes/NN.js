let express = require("express");
let app = express();
let path = require("path");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", function(req, res) {
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.listen(3000);
