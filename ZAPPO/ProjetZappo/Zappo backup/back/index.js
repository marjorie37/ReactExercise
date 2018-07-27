/*********************************************************************************************************************************************
 * *************************************************************************
 * *************************************************************************
 *  Configuration of Framework Express
 * *************************************************************************
 * *************************************************************************
 ******************************************************************************************************************************************/

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const debug = require("debug")("http"); // Module for Debug
const logger = require("morgan"); // Module for Log
const bodyParser = require("body-parser"); // Module for POST/GET datas
const cookieParser = require("cookie-parser"); // Module for cookie in Session
const session = require("express-session");
const fileUpload = require("express-fileupload");
const flash = require("connect-flash");

const bcrypt = require("bcrypt");
const passport = require("passport");
require("./middlewares/passeport"); //New Strategy local for check user with passport

const colors = require("colors/safe"); //New Strategy local for check user with passport

app.use(express.static(__dirname + "/public")); // all statics files in /public
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(fileUpload());

app.use(logger("dev"));
app.use(bodyParser.json()); // API response en JSON
app.use(
  // donnée en get post non encodé par l'URL
  bodyParser.urlencoded({
    extended: false
  })
);

/**
 * Configuration of Session
 */
app.use(
  session({
    secret: "*****JeSuisLaClefSecrèteWild2018*****",
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 100 * 60 * 60 * 24 * 30
    } // lifetime of cookie = 30 days
  })
);

// Initialize Passport Module
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/**
 * For APIs
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

/**
 * Store in global variables
 */
app.use((req, res, next) => {
  res.locals.session = req.session;
  res.locals.user = req.user; // this line
  next();
});

/*********************************************************************************************************************************************
 * *************************************************************************
 * *************************************************************************
 *  Routing
 * *************************************************************************
 * *************************************************************************
 ******************************************************************************************************************************************/
/**
 * Middleware
 */

// Middleware pour des messages flash
app.use((request, response, next) => {
  if (request.session.flash) {
    response.locals.flash = request.session.flash;
    request.session.flash = undefined;
  }

  request.flash = (type, content) => {
    if (request.session.flash === undefined) {
      request.session.flash = {};
    }
    request.session.flash[type] = content;
  };

  next();
});

/**
 * Routing
 */
const admin = require("./routes/admin");
const products = require("./routes/products");
const orders = require("./routes/orders");
const user = require("./routes/user");
const timing = require("./routes/timing");
const stats = require("./routes/stats");
const dashboard = require("./routes/dashboard");
const discounts = require("./routes/discounts");

//routes for back-end admin
app.use("/admin", admin);
app.use("/admin/reglages", timing);
app.use("/admin/produits", products);
app.use("/admin/dashboard", dashboard);
app.use("/admin/statistiques", stats);
app.use("/admin/promotions", discounts);

//routes for front API and back-end Admin
app.use("/api-orders/", orders);

//routes for front API
app.use("/api", user);




// Handle 500
app.use((error, req, res, next) => {
  res.status(500);
  console.error(colors.bold.red.underline(error.stack));
  res.render("errors/500", {
    message: error.message,
    stack: error.stack,
    error: error
  });
});

/*********************************************************************************************************************************************
 * *************************************************************************
 * *************************************************************************
 *  Running Server
 * *************************************************************************
 * *************************************************************************
 ******************************************************************************************************************************************/

app.listen(port, err => {
  console.clear();
  if (!err) console.log(colors.rainbow("Site is live... Go ahead"));
  else console.log(colors.rainbow(err));
  console.log("🤓");
});
