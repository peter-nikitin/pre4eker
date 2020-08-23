import React from "react";
import PropTypes from "prop-types";
import stylesShared from "src/components/respose/responseShared.css";

import toRuDateFormat from "src/helpers/formatDate";
import toRuNumberFormat from "src/helpers/formatNumber";

import types from "./types";

const AppliedPropmotion = ({ promoInfo = {} }) => {
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
    <>
      <div className={stylesShared.promo}>
        <div className={`${stylesShared.promoType} ${stylesShared.line}`}>
          {types[type]}
        </div>
        <div className={`${stylesShared.inline} ${stylesShared.line}`}>
          <div className={stylesShared.half}>
            {promotion && (
              <>
                <div className={stylesShared.name}>Название акции</div>
                <div className={`${stylesShared.value} ${stylesShared.line}`}>
                  {promotion.name}
                </div>
              </>
            )}
          </div>
          {amount && (
            <div className={stylesShared.half}>
              <div className={stylesShared.name}>Сумма</div>
              <div className={stylesShared.promoValue}>
                {toRuNumberFormat(amount)}
              </div>
              {expirationDateTimeUtc && (
                <div className={stylesShared.line}>
                  <div className={stylesShared.name}>До</div>
                  <div className={stylesShared.value}>
                    {toRuDateFormat(expirationDate)}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className={`  ${stylesShared.line}`}>
          {coupon && (
            <div className={stylesShared.line}>
              <div className={stylesShared.name}>Примененный промокод</div>
              <div className={stylesShared.value}>{coupon.ids.code}</div>
              <div className={`${stylesShared.status} ${stylesShared.neutral}`}>
                Из пула: {coupon.pool.name}
              </div>
            </div>
          )}
          {issuedCoupon && (
            <div className={stylesShared.line}>
              <div className={stylesShared.name}>Выданный промокод</div>
              <div className={stylesShared.value}>{issuedCoupon.ids.code}</div>
              <div className={`${stylesShared.status} ${stylesShared.neutral}`}>
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

        {promotion && (
          <div className={`${stylesShared.line} ${stylesShared.promoFooter}`}>
            <div className={stylesShared.promoDetail}>
              MB ID: {promotion.ids.mindboxId}
            </div>
            <div className={stylesShared.promoDetail}>
              Ext ID: {promotion.ids.externalId}
            </div>
            <div className={stylesShared.promoDetail}>{promotion.type}</div>
          </div>
        )}
      </div>
    </>
  );
};

AppliedPropmotion.defaultProps = {
  promoInfo: {},
};

AppliedPropmotion.propTypes = {
  promoInfo: PropTypes.object,
};

export default AppliedPropmotion;
