import React from "react";
import PropTypes from "prop-types";
import stylesShared from "src/components/respose/responseShared.css";
import toRuDateFormat from "src/helpers/formatDate";
import toRuNumberFormat from "src/helpers/formatNumber";

import statuses from "./statuses";

const Coupon = ({ couponInfo }) => {
  const { discountAmountForCurrentOrder } = couponInfo;

  const {
    status,
    availableFromDateTimeUtc,
    availableTillDateTimeUtc,
    usedDateTimeUtc,
    pool,
  } = couponInfo.coupon;

  const { code } = couponInfo.coupon.ids;

  const availableFrom = new Date(availableFromDateTimeUtc);
  const availableTill = new Date(availableTillDateTimeUtc);
  const usedDate = new Date(usedDateTimeUtc);

  return (
    <div className={stylesShared.promo}>
      <div className={stylesShared.promoType}>Промокод</div>
      <div className={`${stylesShared.line} ${stylesShared.inline}`}>
        <div className={stylesShared.half}>
          <div className={stylesShared.line}>
            <div className={stylesShared.value}>{code}</div>
          </div>
          <div className={stylesShared.name}>Статус промокода</div>
          <div className={stylesShared.line}>{statuses[status]}</div>
          <div className={stylesShared.line}>
            <div className={stylesShared.name}>Сумма скидки</div>
            <div className={stylesShared.promoValue}>
              {toRuNumberFormat(discountAmountForCurrentOrder)}
            </div>
          </div>
        </div>
        <div className={stylesShared.half}>
          {availableFromDateTimeUtc && (
            <div className={stylesShared.line}>
              <div className={` ${stylesShared.name}`}>Выдан</div>
              <div className={`  ${stylesShared.value}`}>
                {toRuDateFormat(availableFrom)}
              </div>
            </div>
          )}
          {usedDateTimeUtc && (
            <div className={stylesShared.line}>
              <div className={` ${stylesShared.name}`}>Использован</div>
              <div className={`  ${stylesShared.value}`}>
                {toRuDateFormat(usedDate)}
              </div>
            </div>
          )}
          {availableTillDateTimeUtc && (
            <div className={stylesShared.line}>
              <div className={`  ${stylesShared.name}`}>Сгорит</div>
              <div className={`  ${stylesShared.value}`}>
                {toRuDateFormat(availableTill)}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={stylesShared.inline}>
        <div className={stylesShared.half}>
          <div className={` ${stylesShared.name}`}>Назнивае пула</div>
          <div className={` ${stylesShared.name}`}>{pool.name}</div>
        </div>
        <div className={stylesShared.half}>
          <div className={` ${stylesShared.name}`}>Описание пула</div>
          <div className={` ${stylesShared.name}`}>{pool.description}</div>
        </div>
      </div>
    </div>
  );
};

Coupon.propTypes = {
  couponInfo: PropTypes.object,
};
Coupon.defaultProps = {
  couponInfo: {},
};

export default Coupon;
