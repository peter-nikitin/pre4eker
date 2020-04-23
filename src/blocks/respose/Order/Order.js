import React from "react";
import PropTypes from "prop-types";

import statuses from "./statuses";
import stylesShared from "src/blocks/respose/responseShared.css";
import CustomFileds from "../CustomFields/CustomFields";
import Coupons from "../Coupons/Coupons";
import BonusPointsInfo from "../BonusPointsInfo/BonusPointsInfo";
import BonusPointsChange from "../BonusPointsChange/BonusPointsChange";
import AppliedPropmotion from "../AppliedPromotion/AppliedPromotion";
import Placeholders from "../Placeholders/Placeholders";


const Order = ({ order }) => {
  const {
    processingStatus,
    deliveryCost,
    totalPrice,
    customFields,
    couponsInfo,
    bonusPointsInfo,
    bonusPointsChanges,
    ids,
    appliedPromotions,
    placeholders
  } = order;

  const drawIds = (ids) => {
    const systemNames = Object.keys(ids);
    return systemNames.map((item, i) => (
      <div key={`orderID_${i}`} className={stylesShared.name}>
        {item}: {ids[item]}
      </div>
    ));
  };

  return (
    <>
      <h2>Заказ</h2>
      <div className={stylesShared.customer}>
        <div className={`${stylesShared.inline} ${stylesShared.line}`}>
          {ids && <div className={stylesShared.half}>{drawIds(ids)}</div>}
          <div className={stylesShared.half}>
            <div className={stylesShared.name}>Статус обработки</div>
            <div className={stylesShared.value}>
              {statuses[processingStatus] || processingStatus}
            </div>
          </div>
        </div>
        <div className={stylesShared.inline}>
          {deliveryCost && (
            <div className={stylesShared.half}>
              <div className={stylesShared.name}>Доставка</div>
              <div className={stylesShared.value}>{deliveryCost}</div>
            </div>
          )}
          <div className={stylesShared.half}>
            <div className={stylesShared.name}>Итоговая цена</div>
            <div className={stylesShared.promoValue}>{totalPrice}</div>
          </div>
        </div>
        {customFields && <CustomFileds data={customFields} />}
      </div>
      {appliedPromotions &&
        appliedPromotions.map((promo, i) => (
          <AppliedPropmotion key={`promo_${i}`} promoInfo={promo} />
        ))}
      {couponsInfo &&
        couponsInfo.map((coupon, i) => (
          <Coupons key={`coupon_${i}`} couponInfo={coupon} />
        ))}
      {bonusPointsInfo &&
        bonusPointsInfo.map((bonus, i) => (
          <BonusPointsInfo key={`bonusInfo_${i}`} bonusPointsInfo={bonus} />
        ))}
      {bonusPointsChanges && (
        <BonusPointsChange bonusPointsChanges={bonusPointsChanges} />
      )}
      {placeholders && (
        <Placeholders placeholders={placeholders} />
      )}
    </>
  );
};

Order.propTypes = {
  order: PropTypes.object,
};

export default Order;
