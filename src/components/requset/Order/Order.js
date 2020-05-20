import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";

import style from "./Order.css";

import CustomFields from "../CustomFields/CustomFields";
import ExternalPromo from "../ExternalPromo/ExternalPromo";

import BonusPoints from "./BonusPoints";
import Promocodes from "./Promocodes";
import IdField from "../IdField/IdField";

import orderTypes from "./orderTypes";

const Order = ({ setRequestJSON, requestJSON }) => {
  const { body } = requestJSON;
  let initialOrder;
  if (typeof body !== "undefined") {
    initialOrder = body.order;
  }
  let orderIdFiled;
  let initialOrderIdFiled;

  if (typeof initialOrder !== "undefined" && initialOrder.ids !== "undefined") {
    [, initialOrderIdFiled] = orderTypes;
  } else {
    [initialOrderIdFiled] = orderTypes;
  }

  const [orderType, setOrderType] = useState(initialOrderIdFiled);
  const [orderBody, setOrderBody] = useState({ ...initialOrder });

  useEffect(() => {
    if (Object.keys(orderBody).length > 0) {
      setRequestJSON({
        ...requestJSON,
        body: {
          ...body,
          order: {
            ...orderBody,
          },
        },
      });
    }
  }, [orderBody]);

  if (orderType.type === "existing") {
    orderIdFiled = (
      <IdField object={orderBody} setObject={setOrderBody} type="order" />
    );
  }

  return (
    <>
      <div className={style.inline}>
        <h2 className={style.h2}>Заказ</h2>
        <div className={style.orderButtons}>
          {orderTypes.map((item) => (
            <Button
              key={item.type}
              type="TEXT"
              active={orderType.type === item.type}
              action={() => setOrderType(item)}
              size="sizeAuto"
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>
      <div className={`${style.inline} ${style.line}`}>{orderIdFiled}</div>
      <div className={`${style.inline} ${style.line}`}>
        <div className={style.third}>
          <Input
            label="Точка контакта"
            name="pointOfContact"
            value={requestJSON.body?.pointOfContact}
            onChange={(e) =>
              setRequestJSON({
                ...requestJSON,
                body: {
                  ...body,
                  pointOfContact: e.target.value,
                },
              })
            }
          />
        </div>
        <div className={style.third}>
          <Input
            label="Зона"
            name="area"
            value={orderBody.area?.ids?.externalId}
            onChange={(e) =>
              setOrderBody({
                ...orderBody,
                area: {
                  ids: {
                    externalId: e.target.value,
                  },
                },
              })
            }
          />
        </div>
        <div className={style.third}>
          <Input
            label="Стоимость доставки"
            name="deliveryCost"
            value={orderBody.deliveryCost}
            onChange={(e) =>
              setOrderBody({
                ...orderBody,
                deliveryCost: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className={`${style.inline} ${style.line} `}>
        <div className={`${style.half} ${style.promoBlock}`}>
          <BonusPoints orderBody={orderBody} setOrderBody={setOrderBody} />
        </div>
        <div className={`${style.half} ${style.promoBlock}`}>
          <Promocodes orderBody={orderBody} setOrderBody={setOrderBody} />
        </div>
      </div>

      <CustomFields
        body={orderBody}
        setBody={setOrderBody}
        typeOfParrent="order"
      />

      <ExternalPromo
        body={orderBody}
        setBody={setOrderBody}
        typeOfParrent="order"
      />
    </>
  );
};

Order.propTypes = {
  requestJSON: PropTypes.object,
  setRequestJSON: PropTypes.func,
};

Order.defaultProps = {
  requestJSON: {},
  setRequestJSON: () => ({}),
};

export default Order;
