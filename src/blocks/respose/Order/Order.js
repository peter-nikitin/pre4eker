import React from "react";
import PropTypes from "prop-types";

import statuses from "./statuses";
import stylesShared from "src/blocks/respose/responseShared.css";
import CustomFileds from "../CustomFields/CustomFields";
import Coupons from "../Coupons/Coupons";
import BonusPointsInfo from "../BonusPointsInfo/BonusPointsInfo";
import BonusPointsChange from "../BonusPointsChange/BonusPointsChange";
import AppliedPropmotion from "../AppliedPromotion/AppliedPromotion";


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
    lines,
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
        <div className={stylesShared.inline}>
          <div className={stylesShared.half}>{drawIds(ids)}</div>
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
        <BonusPointsChange
          bonusPointsChanges={bonusPointsChanges}
        />
      )}

     
      
    </>
  );
};

Order.propTypes = {
  order: PropTypes.object,
};

export default Order;
