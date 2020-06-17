import { Parser } from "xml2js";

const mustBeArrays = [
  "requestedPromotions",
  "bonusPoints",
  "coupons",
  "payments",
  "lines",
  "appliedPromotions",
  "placeholders",
  "bonusPointsInfo",
  "couponsInfo",
  "paymentsInfo",
  "bonusPointsChanges",
];

const converToArray = (value, name) => {
  if (mustBeArrays.includes(value)) {
    return Array.from(name);
  }
  return name;
};

const { parseString } = new Parser({
  explicitArray: false,
  valueProcessors: converToArray,
});

const converToJSON = (data) => {
  return parseString(data, (err, result) => {
    if (err) {
      return { status: "error", data: err };
    }
    console.log(result);

    return { status: "succes", data: result };
  });
};

export default converToJSON;
