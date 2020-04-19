import React from "react";
import PropTypes from "prop-types";
import stylesShared from "src/blocks/respose/responseShared.css";
import statuses from "./statuses";

const Coupons = ({ couponInfo }) => {
  const { discountAmountForCurrentOrder } = couponInfo;

  const {
    status,
    availableFromDateTimeUtc,
    availableTillDateTimeUtc,
    usedDateTimeUtc,
  } = couponInfo.coupon;

  const { code } = couponInfo.coupon.ids;

  const availableFrom = new Date(availableFromDateTimeUtc);
  const availableTill = new Date(availableTillDateTimeUtc);
  const usedDate = new Date(usedDateTimeUtc);

  return (
    <div className={stylesShared.promo}>
        <div className={stylesShared.promoType}>Промокод</div>
      <div className={stylesShared.inline}>
        <div className={stylesShared.half}>
          <div className={stylesShared.line}>
            <div className={stylesShared.value}>{code}</div>
          </div>
          <div className={stylesShared.line}>{statuses[status]}</div>
          <div className={stylesShared.line}>
            <div className={stylesShared.name}>Сумма скидки</div>
            <div className={stylesShared.promoValue}>
              {discountAmountForCurrentOrder}
            </div>
          </div>
        </div>
        <div className={stylesShared.half}>
          {availableFromDateTimeUtc && (
            <div className={stylesShared.line}>
              <div className={` ${stylesShared.name}`}>Выдан</div>
              <div className={`  ${stylesShared.value}`}>
                {availableFrom.toDateString()}
              </div>
            </div>
          )}
          {availableTillDateTimeUtc && (
            <div className={stylesShared.line}>
              <div className={`  ${stylesShared.name}`}>Сгорит</div>
              <div className={`  ${stylesShared.value}`}>
                {availableTill.toDateString()}
              </div>
            </div>
          )}
          {usedDateTimeUtc && (
            <div className={stylesShared.line}>
              <div className={` ${stylesShared.name}`}>Использован</div>
              <div className={`  ${stylesShared.value}`}>
                {usedDate.toDateString()}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Coupons.propTypes = {};

export default Coupons;
