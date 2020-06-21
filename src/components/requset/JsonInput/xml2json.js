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

const { parseStringPromise } = new Parser({
  explicitArray: false,
});

export const requestToJSON = async (data) => {
  const jsonFromXml = await parseStringPromise(data);
  const { operation } = JSON.parse(JSON.stringify(jsonFromXml));

  if (typeof operation.order.bonusPoints !== "undefined") {
    operation.order.bonusPoints = [
      ...operation.order.bonusPoints.bonusPointsItem,
    ];
  }

  if (typeof operation.order.coupons !== "undefined") {
    operation.order.coupons = [...operation.order.coupons.coupon];
  }
  if (typeof operation.order.lines !== "undefined") {
    operation.order.lines = [...operation.order.lines.line];
    operation.order.lines.map((item) => {
      const line = item;
      if (typeof line.requestedPromotions !== "undefined") {
        line.requestedPromotions = [
          ...line.requestedPromotions.requestedPromotion,
        ];
      }
    });
  }
  if (typeof operation.order.requestedPromotions !== "undefined") {
    operation.order.requestedPromotions = [
      ...operation.order.requestedPromotions.requestedPromotion,
    ];
  }
  if (typeof operation.order.payments !== "undefined") {
    operation.order.payments = [...operation.order.payments.payment];
  }

  return operation;
};

export const responseToJSON = async (data) => {
  const jsonFromXml = await parseStringPromise(data);
  const { result } = JSON.parse(JSON.stringify(jsonFromXml));

  if (typeof result.order.bonusPoints !== "undefined") {
    result.order.bonusPoints = [...result.order.bonusPoints.bonusPointsItem];
  }

  if (typeof result.order.coupons !== "undefined") {
    result.order.coupons = [...result.order.coupons.coupon];
  }
  if (typeof result.order.lines !== "undefined") {
    result.order.lines = [...result.order.lines.line];
    result.order.lines.map((item) => {
      const line = item;
      if (typeof line.requestedPromotions !== "undefined") {
        line.requestedPromotions = [
          ...line.requestedPromotions.requestedPromotion,
        ];
      }
    });
  }
  if (typeof result.order.requestedPromotions !== "undefined") {
    result.order.requestedPromotions = [
      ...result.order.requestedPromotions.requestedPromotion,
    ];
  }
  if (typeof result.order.payments !== "undefined") {
    result.order.payments = [...result.order.payments.payment];
  }

  return result;
};
