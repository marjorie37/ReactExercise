const express = require("express");
const router = express.Router();

const passport = require("passport");

/**
 * Routing for Exemples
 */
const AuthController = require("../controllers/AuthController");
const controller = new AuthController();

router.get("/login", (req, res) => controller.login(req, res));
router.get("/logout", (req, res) => controller.logout(req, res));
router.get("/register", (req, res) => controller.register(req, res));
router.post("/register", (req, res) => controller.register(req, res));

router.post(
  "/login",
  passport.authenticate("local", {
    // Stratégie Locale Configurée
    // Middleware de Passport : authenticate()
    successRedirect: "/user/mon_compte",
    failureRedirect: "/user/login",
    failureFlash: true,
    successFlash: true
  })
);

module.exports = router;
