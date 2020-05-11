import React, { useState } from "react";
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

import arrayFunctions from "../arrayFunctions";

const Order = ({
  orderType,
  setOrderType,
  orderBody,
  setOrderBody,
  orderCustomFields,
  setOrderCustomFileds,
  orderExternalPromos,
  setOrderExternalPromo,
  promocodes,
  setPromocodes,
  bonusPoints,
  setbonusPoints,
}) => {
  let orderFiled;

  if (orderType.type === "existing") {
    orderFiled = (
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
      <div className={`${style.inline} ${style.line}`}>{orderFiled}</div>
      <div className={`${style.inline} ${style.line}`}>
        <div className={style.third}>
          <Input
            label="Точка контакта"
            name="pointOfContact"
            value={orderBody.pointOfContact}
            onChange={(e) =>
              setOrderBody({
                ...orderBody,
                pointOfContact: e.target.value,
              })
            }
          />
        </div>
        <div className={style.third}>
          <Input
            label="Зона"
            name="area"
            value={orderBody.area}
            onChange={(e) =>
              setOrderBody({
                ...orderBody,
                area: e.target.value,
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
          <BonusPoints
            bonusPoints={bonusPoints}
            setbonusPoints={setbonusPoints}
          />
        </div>
        <div className={`${style.half} ${style.promoBlock}`}>
          <Promocodes promocodes={promocodes} setPromocodes={setPromocodes} />
        </div>
      </div>

      <CustomFields
        customFields={orderCustomFields}
        setCustomFileds={setOrderCustomFileds}
      />

      <ExternalPromo
        externalPromos={orderExternalPromos}
        setExternalPromo={setOrderExternalPromo}
      />
    </>
  );
};

Order.propTypes = {
  orderType: PropTypes.object,
  setOrderType: PropTypes.func,
  orderBody: PropTypes.object,
  setOrderBody: PropTypes.func,
  orderCustomFields: PropTypes.array,
  setOrderCustomFileds: PropTypes.func,
  orderExternalPromos: PropTypes.array,
  setOrderExternalPromo: PropTypes.func,
  promocodes: PropTypes.array,
  setPromocodes: PropTypes.func,
  bonusPoints: PropTypes.array,
  setbonusPoints: PropTypes.func,
};

Order.defaultProps = {
  orderType: {},
  setOrderType: () => ({}),
  orderBody: {},
  setOrderBody: () => ({}),
  orderCustomFields: [],
  setOrderCustomFileds: () => ({}),
  orderExternalPromos: [],
  setOrderExternalPromo: () => ({}),
  promocodes: [],
  setPromocodes: () => ({}),
  bonusPoints: [],
  setbonusPoints: () => ({}),
};

export default Order;
