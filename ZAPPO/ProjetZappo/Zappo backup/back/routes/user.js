const express = require("express");
const router = express.Router();
const {signToken, decodeToken} = require('../middlewares/jwt');
const passport = require("passport");

/**
 * Routing for Exemples
 */
const UserAuthController = require("../controllers/UserAuthController");
const controller = new UserAuthController();


router.post(
  "/connexion",
  passport.authenticate("user"),
  (req, res) =>
    res.json({
      ...req.session.flash,
      token: signToken(req.user)
    })
);

router.get("/deconnection", (req, res) => controller.logout(req, res));
router.get("/creermoncompte", (req, res) => controller.register(req, res));
router.post("/creermoncompte", (req, res) => controller.create(req, res));
router.get("/moncompte", (req, res) => controller.myAccount(req, res));
router.get("/moncompte/modifier", (req, res) => controller.modify(req, res));
router.post("/moncompte/modifier/:id", (req, res) =>
  controller.update(req, res)
);
router.get("/motdepasseperdu", (req, res) => controller.lostPassword(req, res));
router.post("/motdepasseperdu", (req, res) =>
  controller.changePassword(req, res)
);
router.get("/supprimermoncompte/:id", (req, res) =>
  controller.delete(req, res)
);

module.exports = router;
