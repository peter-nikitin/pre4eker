const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const pug = require("pug");
// const router = require("./router");
// const helpers = require("./helpers");
const { notFound } = require("./middlewares");
const mindbox = require("./prechek");
const config = require("./config");
// const watch = require("./watch");

// Initialize Express app.
const app = express();

// app.set("views", config.views);
app.set("view engine", "pug");
// app.locals.basedir = config.views;

// Log every request.
app.use(morgan("combined"));

// Parse JSON body for every request.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Parse cookies for every request.
app.use(cookieParser());

// Serve static files.
app.use("/", express.static(config.static));

// Mount routes.
// app.use("/", router);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});

app.post("/prechek", (req, res, next) => {
  mindbox(req.body)
    .then((resp) => resp.json())
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
      next();
    });
});

// Show 404 page.
app.use(notFound());

module.exports = app;
