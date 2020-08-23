import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import stylesShared from "src/components/respose/responseShared.css";

import toRuNumberFormat from "src/helpers/formatNumber";

import statuses from "./statuses";
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
    placeholders,
  } = order;

  const drawIds = (items) => {
    const systemNames = Object.keys(items);
    return systemNames.map((item) => (
      <div key={shortid.generate()} className={stylesShared.name}>
        {`${item}: ${items[item]}`}
      </div>
    ));
  };

  return (
    <div>
      <h2 className={stylesShared.h2}>Заказ</h2>
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
          {deliveryCost > 0 && (
            <div className={stylesShared.half}>
              <div className={stylesShared.name}>Доставка</div>
              <div className={stylesShared.value}>
                {toRuNumberFormat(deliveryCost)}
              </div>
            </div>
          )}
          <div className={stylesShared.half}>
            <div className={stylesShared.name}>Итоговая цена</div>
            <div className={stylesShared.promoValue}>
              {toRuNumberFormat(totalPrice)}
            </div>
          </div>
        </div>
        {customFields && <CustomFileds data={customFields} />}
      </div>
      {appliedPromotions &&
        appliedPromotions.map((promo) => (
          <AppliedPropmotion key={shortid.generate()} promoInfo={promo} />
        ))}
      {couponsInfo && <Coupons coupons={couponsInfo} />}
      {bonusPointsInfo &&
        bonusPointsInfo.map((bonus) => (
          <BonusPointsInfo key={shortid.generate()} bonusPointsInfo={bonus} />
        ))}
      {bonusPointsChanges && (
        <BonusPointsChange bonusPointsChanges={bonusPointsChanges} />
      )}
      {placeholders && <Placeholders placeholders={placeholders} />}
    </div>
  );
};

Order.propTypes = {
  order: PropTypes.object,
};

Order.defaultProps = {
  order: {},
};

export default Order;
