const config = require("./config");
const app = require("./main");

const url = `http://${config.host}:${config.port}`;

app.listen(config.port, config.host, (error) => {
  if (error) throw error;

  // eslint-disable-next-line
  console.log(`Listening at ${url}...`);
});
