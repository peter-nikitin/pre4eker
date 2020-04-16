import types from "./types";

import React from "react";
import PropTypes from "prop-types";
import stylesShared from "src/customer.css";

const AppliedPropmotion = ({ promoInfo }) => {
  const {
    type,
    promotion,
    balanceType,
    amount,
    expirationDateTimeUtc,
    coupon,
    issuedCoupon,
  } = promoInfo;

  const expirationDate = new Date(expirationDateTimeUtc);
  return (
    <div>
      <div className={stylesShared.customer}>
        <div className={stylesShared.inline}>
          <div className={stylesShared.half}>
            <div className={stylesShared.promoType}>{types[type]}</div>
            {promotion && (
              <div className={stylesShared.value}> {promotion.name}</div>
            )}
            {coupon && (
              <div className={stylesShared.line}>
                <div className={stylesShared.name}>Примененный промокод</div>
                <div className={stylesShared.value}>{coupon.ids.code}</div>
                <div
                  className={`${stylesShared.status} ${stylesShared.neutral}`}
                >
                  Из пула: {coupon.pool.name}
                </div>
              </div>
            )}
            {issuedCoupon && (
              <div className={stylesShared.line}>
                <div className={stylesShared.name}>Выданный промокод</div>
                <div className={stylesShared.value}>
                  {issuedCoupon.ids.code}
                </div>
                <div
                  className={`${stylesShared.status} ${stylesShared.neutral}`}
                >
                  Из пула:
                  {issuedCoupon.pool.name}
                </div>
              </div>
            )}
            {balanceType && (
              <div className={stylesShared.line}>
              <div className={stylesShared.name}>Балльный счет</div>
                <div className={stylesShared.value}>{balanceType.name}</div>
                <div className={`${stylesShared.status} ${stylesShared.neutral}`}>
                  Сис имя: {balanceType.ids.systemName}
                </div>
              </div>
            )}
          </div>

          {amount && (
            <div className={stylesShared.half}>
              <div className={stylesShared.name}>Сумма</div>
              <div className={stylesShared.promoValue}>{amount}</div>
              {expirationDateTimeUtc && (
                <div className={stylesShared.line}>
                  <div className={stylesShared.name}>До</div>
                  <div className={stylesShared.value}>
                    {expirationDate.toDateString()}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {promotion && (
          <div className={stylesShared.inline}>
            <span>{promotion.ids.mindboxId}</span>
            <span>{promotion.ids.externalId}</span>
            <span>{promotion.type}</span>
          </div>
        )}
      </div>
    </div>
  );
};

AppliedPropmotion.propTypes = {};

export default AppliedPropmotion;
