const express = require("express");
const router = express.Router();
const passport = require('passport');
const {signToken, decodeToken} = require('../middlewares/jwt');



/**
 * Routing for Orders
 */
const OrdersController = require("../controllers/OrdersController");
const controller = new OrdersController();

// route listant les articles
router.get("/", (req, res) => controller.orders(req, res));
router.get("/valider/:id/:state", (req, res) => controller.acceptOrder(req, res));
router.get("/annuler/:id/:state", (req, res) => controller.cancelOrder(req, res));
router.get("/terminer/:id/:state", (req, res) => controller.finishOrder(req, res));

router.post(
    "/connexion",
    passport.authenticate("staff"),
    (req,res) => 
        res.json({
            ...req.session.flash,
            token: signToken(req.user)
        })
);



module.exports = router;
 