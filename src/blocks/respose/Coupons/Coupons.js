import React from "react";
import PropTypes from "prop-types";
import stylesShared from "src/customer.css";
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
    <div className={stylesShared.customer}>
      <div className={stylesShared.inline}>
        <div className={stylesShared.half}>
          <div className={stylesShared.name}>Промокод</div>
          <div className={stylesShared.value}>{code}</div>
        </div>
        <div className={stylesShared.half}>
          <div className={stylesShared.name}>Сумма скидки</div>
          <div className={stylesShared.promoValue}>
            {discountAmountForCurrentOrder}
          </div>
        </div>
      </div>
      <div className={stylesShared.inline}>{statuses[status]}</div>
      {availableFromDateTimeUtc && (
        <div className={stylesShared.inline}>
          <div className={`${stylesShared.half} ${stylesShared.value}`}>
            Выдан
          </div>
          <div className={`${stylesShared.half} ${stylesShared.value}`}>
            {availableFrom.toDateString()}
          </div>
        </div>
      )}
      {availableTillDateTimeUtc && (
        <div className={stylesShared.inline}>
          <div className={`${stylesShared.half} ${stylesShared.value}`}>
            Сгорит
          </div>
          <div className={`${stylesShared.half} ${stylesShared.value}`}>
            {availableTill.toDateString()}
          </div>
        </div>
      )}
      {usedDateTimeUtc && (
        <div className={stylesShared.inline}>
          <div className={`${stylesShared.half} ${stylesShared.value}`}>
            Использован
          </div>
          <div className={`${stylesShared.half} ${stylesShared.value}`}>
            {usedDate.toDateString()}
          </div>
        </div>
      )}
    </div>
  );
};

Coupons.propTypes = {};

export default Coupons;
