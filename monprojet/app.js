const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const express = require("express");
const methodOverride = require("method-override");
const app = express();
const Session = require("express-session");
const FileStore = require("session-file-store")(Session);

//MiddleWare sessions
app.use(
  Session({
    store: new FileStore({
      path: path.join(__dirname, "/tmp"),
      encrypt: true
    }),
    secret: "Super Secret !",
    resave: true,
    saveUninitialized: true,
    name: "sessionId"
  })
);

app.use(methodOverride("_method"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
