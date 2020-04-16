import React from "react";
import PropTypes from "prop-types";

import statuses from "./statuses";
import stylesShared from "src/customer.css";
import CustomFileds from "../CustomFields/CustomFields";
import Coupons from "../Coupons/Coupons";
import BonusPointsInfo from "../BonusPointsInfo/BonusPointsInfo";
import BonusPointsChange from "../BonusPointsChange/BonusPointsChange";

const Order = ({ order }) => {
  const {
    processingStatus,
    deliveryCost,
    totalPrice,
    customFields,
    couponsInfo,
    bonusPointsInfo,
    bonusPointsChanges,
    ids
  } = order;

  const drawIds = (ids) => {
    const systemNames = Object.keys(ids);
    return systemNames.map((item) =>  (<div className={stylesShared.name}>{item}: {ids[item]} </div>) )
  };

  return (
    <>
      <h2>Заказ</h2>
      <div className={stylesShared.customer}>
        <div className={stylesShared.inline}>
          <div className={stylesShared.half}>
            { drawIds(ids) }
          </div>
          <div className={stylesShared.half}>
            <div className={stylesShared.name}>Статус обработки</div>
            <div className={stylesShared.value}>
              {statuses[processingStatus] || processingStatus}
            </div>
          </div>
        </div>
        <div className={stylesShared.inline}>
          <div className={stylesShared.half}>
            <div className={stylesShared.value}>Доставка</div>
          </div>
          <div className={stylesShared.half}>
            <div className={stylesShared.value}>{deliveryCost}</div>
          </div>
        </div>
        <div className={stylesShared.inline}>
          <div className={stylesShared.half}>
            <div className={stylesShared.value}>Итоговая цена</div>
          </div>
          <div className={stylesShared.half}>
            <div className={stylesShared.value}>{totalPrice}</div>
          </div>
        </div>
        {customFields && <CustomFileds data={customFields} />}
      </div>
      {couponsInfo &&
        couponsInfo.map((coupon) => <Coupons couponInfo={coupon} />)}
      {bonusPointsInfo &&
        bonusPointsInfo.map((bonus) => (
          <BonusPointsInfo bonusPointsInfo={bonus} />
        ))}
      {bonusPointsChanges &&
        bonusPointsChanges.map((bonus) => (
          <BonusPointsChange bonusPointsChanges={bonus} />
        ))}
    </>
  );
};

Order.propTypes = {
  order: PropTypes.object,
};

export default Order;
