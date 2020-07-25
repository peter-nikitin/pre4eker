import { Parser } from "xml2js";

const { parseStringPromise } = new Parser({
  explicitArray: false,
});

const requestToJSON = (data) => {
  const operation = data;

  try {
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
        return line;
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
  } catch (error) {
    console.warn(error);
  }
  return JSON.stringify(operation, null, 1);
};

const responseToJSON = (data) => {
  const result = data;

  if (typeof result.order.appliedPromotions !== "undefined") {
    result.order.appliedPromotions = [
      ...result.order.appliedPromotions.appliedPromotion,
    ];
  }
  if (typeof result.order.placeholders !== "undefined") {
    result.order.placeholders = [...result.order.placeholders.placeholder];
    result.order.placeholders.map((holder) => {
      const placeholder = holder;
      if (typeof placeholder.products !== "undefined") {
        placeholder.products = [...placeholder.products.product];
      }
      if (typeof placeholder.content !== "undefined") {
        placeholder.content = [...placeholder.content.contentItem];
        placeholder.content.map((contentItem) => {
          const content = contentItem;
          if (typeof content.possibleDiscounts !== "undefined") {
            content.possibleDiscounts.products = [
              ...content.possibleDiscounts.products.product,
            ];
          }
          return content;
        });
      }
      return placeholder;
    });
  }
  if (typeof result.order.bonusPointsInfo !== "undefined") {
    result.order.bonusPointsInfo = [
      ...result.order.bonusPointsInfo.bonusPointsInfoItem,
    ];
  }
  if (typeof result.order.couponsInfo !== "undefined") {
    result.order.couponsInfo = [...result.order.couponsInfo.couponInfo];
  }
  if (typeof result.order.paymentsInfo !== "undefined") {
    result.order.paymentsInfo = [...result.order.paymentsInfo.paymentInfo];
  }
  if (typeof result.order.bonusPointsChanges !== "undefined") {
    result.order.bonusPointsChanges = [
      ...result.order.bonusPointsChanges.bonusPointsChange,
    ];
  }
  if (typeof result.order.customFields !== "undefined") {
    const fields = Object.keys(result.order.customFields);

    fields.map((field) => {
      if (typeof result.order.customFields[field] === "object") {
        const fieldValueKyes = Object.keys(result.order.customFields[field])[0];
        if (fieldValueKyes === "value") {
          result.order.customFields[field] = [
            ...result.order.customFields[field].value,
          ];
        }
      }
    });
  }

  if (typeof result.customer.customFields !== "undefined") {
    const fields = Object.keys(result.customer.customFields);

    fields.map((field) => {
      if (typeof result.customer.customFields[field] === "object") {
        const fieldValueKyes = Object.keys(
          result.customer.customFields[field]
        )[0];
        if (fieldValueKyes === "value") {
          result.customer.customFields[field] = [
            ...result.customer.customFields[field].value,
          ];
        }
      }
      return "";
    });
  }

  if (typeof result.order.lines !== "undefined") {
    result.order.lines = [...result.order.lines.line];
    result.order.lines.map((item) => {
      const line = item;
      if (typeof line.appliedPromotions !== "undefined") {
        line.appliedPromotions = [...line.appliedPromotions.appliedPromotion];
      }

      if (typeof line.customFields !== "undefined") {
        const fields = Object.keys(line.customFields);

        fields.map((field) => {
          if (typeof line.customFields[field] === "object") {
            const fieldValueKyes = Object.keys(line.customFields[field])[0];
            if (fieldValueKyes === "value") {
              line.customFields[field] = [...line.customFields[field].value];
            }
          }
          return "";
        });
      }

      if (typeof line.placeholders !== "undefined") {
        line.placeholders = [...line.placeholders.placeholder];
        line.placeholders.map((holder) => {
          const placeholder = holder;
          if (typeof placeholder.products !== "undefined") {
            placeholder.products = [...placeholder.products.product];
          }
          if (typeof placeholder.content !== "undefined") {
            placeholder.content = [...placeholder.content.contentItem];
            placeholder.content.map((contentItem) => {
              const content = contentItem;
              if (typeof content.possibleDiscounts !== "undefined") {
                content.possibleDiscounts.products = [
                  ...content.possibleDiscounts.products.product,
                ];
              }
              return content;
            });
          }
          return placeholder;
        });
      }
      return line;
    });
  }
  if (typeof result.balances !== "undefined") {
    result.balances = [...result.balances.balance];
  }

  return JSON.stringify(result, null, 1);
};

const convertXML2JSON = async (XMLString = "") => {
  if (XMLString === "") {
    return "";
  }
  const jsonFromXml = await parseStringPromise(XMLString);
  if (typeof jsonFromXml.operation !== "undefined") {
    return requestToJSON(jsonFromXml.operation);
  }
  if (typeof jsonFromXml.result !== "undefined") {
    return responseToJSON(jsonFromXml.result);
  }
  return "";
};

export default convertXML2JSON;
