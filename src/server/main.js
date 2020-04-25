const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
// const router = require("./router");
// const helpers = require("./helpers");
const { notFound } = require("./middlewares");
const config = require("./config");
const watch = require("./watch");

// Initialize Express app.
const app = express();
const url = `http://${config.host}:${config.port}`;

// Watch file changes in development environment.
if (config.isDevelopment) {
  watch(app);
}

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

app.get("/express_backend", (req, res) => {
  res.json({ data: "my data" });
});

// Show 404 page.
app.use(notFound());

// Start server listening.
app.listen(config.port, config.host, (error) => {
  if (error) throw error;

  // eslint-disable-next-line
  console.log(`Listening at ${url}...`);
});
