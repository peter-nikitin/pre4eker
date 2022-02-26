const fetch = require("node-fetch");

const mindbox = ({ endpoint, key, operation, body }) => {
  const url = `https://api.mindbox.ru/v3/operations/sync?endpointId=${endpoint}&operation=${operation}`;
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
    Authorization: `Mindbox secretKey="${key}"`,
  };
  const reqBody = JSON.stringify(body);

  return fetch(url, {
    method: "POST",
    headers,
    body: reqBody,
  });
};

module.exports = mindbox;
