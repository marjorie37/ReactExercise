const express = require("express");
const router = express.Router();
const db = require(`../models/index.js`);



/**
 * Routing for 
 */
const DashboardController = require("../controllers/DashboardController");
const controller = new DashboardController();

//admin login
router.get("/", (req, res) => controller.dashboard(req, res));




module.exports = router;