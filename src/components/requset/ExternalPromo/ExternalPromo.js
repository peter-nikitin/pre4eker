import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";

import style from "./ExternalPromo.css";

import arrayFunctions from "../arrayFunctions";

const ExternalPromo = ({ body, setBody, typeOfParent }) => {
  const toLocalExternalPromo = (passedBody) => {
    if (typeof passedBody.requestedPromotions !== "undefined") {
      return passedBody.requestedPromotions.map((externalPromo, index) => ({
        number: index,
        type: externalPromo.promotion.type,
        id: externalPromo.promotion.ids.externalId,
        disCountType: externalPromo.type,
        value: externalPromo.amount,
      }));
    }
    return [];
  };
  // console.log(body.requestedPromotions);

  const [externalPromos, setExternalPromo] = useState([
    ...toLocalExternalPromo(body),
  ]);

  useEffect(() => {
    const requestedPromotions = externalPromos.map(
      ({ disCountType, id, value, type }) => ({
        type: disCountType,
        promotion: {
          ids: {
            externalId: id,
          },
          type,
        },
        amount: value,
      })
    );
    if (externalPromos.length > 0) {
      setBody({
        ...body,
        requestedPromotions,
      });
    }
  }, [externalPromos]);

  return (
    <div className={style.externalPromo}>
      <div className={`${style.inline}`}>
        <h4 className={style.h4}>Внешние промоакции</h4>
        <Button
          data-testid="add"
          action={() =>
            setExternalPromo(arrayFunctions.addItem(externalPromos))
          }
          role="button"
          type="ADD"
        />
      </div>

      {externalPromos.map((item) => (
        <div key={item.number} className={`${style.item}`}>
          <div className={`${style.inline}`}>
            <div className={`${style.inline} ${style.promoTypeBtns}`}>
              <Button
                type="TEXT"
                size="sizeAuto"
                active={item.type === "external"}
                action={() => {
                  const upDatedValue = {
                    ...item,
                    type: "external",
                  };
                  setExternalPromo(
                    arrayFunctions.updateItem(externalPromos, upDatedValue)
                  );
                }}
              >
                Внешняя
              </Button>
              <Button
                type="TEXT"
                size="sizeAuto"
                active={item.type === "mindbox"}
                action={() => {
                  const upDatedValue = {
                    ...item,
                    type: "mindbox",
                  };
                  setExternalPromo(
                    arrayFunctions.updateItem(externalPromos, upDatedValue)
                  );
                }}
              >
                Mindbox
              </Button>
            </div>
            <div className={`${style.inline} ${style.promoTypeBtns}`}>
              <Button
                type="TEXT"
                size="sizeAuto"
                active={item.disCountType === "discount"}
                action={() => {
                  const upDatedValue = {
                    ...item,
                    disCountType: "discount",
                  };
                  setExternalPromo(
                    arrayFunctions.updateItem(externalPromos, upDatedValue)
                  );
                }}
              >
                Скидка
              </Button>
              <Button
                type="TEXT"
                size="sizeAuto"
                active={item.disCountType === "deliveryDiscount"}
                action={() => {
                  const upDatedValue = {
                    ...item,
                    disCountType: "deliveryDiscount",
                  };
                  setExternalPromo(
                    arrayFunctions.updateItem(externalPromos, upDatedValue)
                  );
                }}
              >
                Скидка на доставку
              </Button>
            </div>
            <Button
              action={() => {
                setExternalPromo(
                  arrayFunctions.removeItem(externalPromos, item)
                );
              }}
              type="REMOVE"
            />
          </div>
          <div className={style.inline}>
            <div className={style.half}>
              <Input
                label="ИД акции"
                name={`externalPromo-${typeOfParent}-${item.number}-id`}
                value={item.id}
                onChange={(e) => {
                  const upDatedValue = {
                    ...item,
                    id: e.target.value,
                  };
                  setExternalPromo(
                    arrayFunctions.updateItem(externalPromos, upDatedValue)
                  );
                }}
              />
            </div>
            <div className={style.half}>
              <Input
                label="Сумма"
                name={`externalProm-${typeOfParent}-${item.number}-value`}
                value={item.value}
                onChange={(e) => {
                  const upDatedValue = {
                    ...item,
                    value: e.target.value,
                  };
                  setExternalPromo(
                    arrayFunctions.updateItem(externalPromos, upDatedValue)
                  );
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ExternalPromo.propTypes = {
  body: PropTypes.object,
  setBody: PropTypes.func,
  typeOfParent: PropTypes.string,
};

ExternalPromo.defaultProps = {
  body: {},
  setBody: () => ({}),
  typeOfParent: "",
};
export default ExternalPromo;
