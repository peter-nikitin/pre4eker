const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch");

// const response = require("../../data/response");

// console.log(response);

// const ep = "demo-test-1C-shop";
// const sc = "3LXRZHhbvA68IT4XGzNo";
// const op = "Preorder";

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
