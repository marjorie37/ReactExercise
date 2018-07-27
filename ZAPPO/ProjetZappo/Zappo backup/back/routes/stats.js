const express = require("express");
const router = express.Router();

const StatsController = require("../controllers/StatsController");
const controller = new StatsController();

router.get("/", (req, res) => controller.stats(req, res));

module.exports = router;
