import React from "react";
import PropTypes from "prop-types";
import stylesShared from "src/components/respose/responseShared.css";
import statuses from "./statuses";

const BonusPointsInfo = ({ bonusPointsInfo }) => {
  const {
    status,
    availableAmountForCurrentOrder,
    spentAmountForCurrentOrder,
    balance,
  } = bonusPointsInfo;

  return (
    <div className={stylesShared.promo}>
      <div className={stylesShared.inline}>
        <div className={stylesShared.half}>
          <div className={stylesShared.promoType}>Информация о баллах</div>
        </div>

        <div className={stylesShared.half}>
          <div className={stylesShared.name}>Статус обработки</div>
          <div className={stylesShared.value}>{statuses[status] || status}</div>
        </div>
      </div>
      <div className={stylesShared.inline}>
        {availableAmountForCurrentOrder && (
          <div className={stylesShared.half}>
            <div className={stylesShared.name}>Доступно для списание</div>
            <div className={stylesShared.promoValue}>
              {availableAmountForCurrentOrder}
            </div>
          </div>
        )}

        {spentAmountForCurrentOrder && (
          <div className={stylesShared.half}>
            <div className={stylesShared.name}>Будет списано</div>
            <div className={stylesShared.half}>
              <div className={stylesShared.promoValue}>
                {spentAmountForCurrentOrder}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={stylesShared.inline}>
        <div className={stylesShared.name}>Баланс</div>
        <div className={stylesShared.third}>
          <div className={stylesShared.name}>Доступно</div>
          <div className={stylesShared.value}>{balance.available}</div>
        </div>
        <div className={stylesShared.third}>
          <div className={stylesShared.name}>Блок</div>
          <div className={stylesShared.value}>{balance.blocked}</div>
        </div>
        <div className={stylesShared.third}>
          <div className={stylesShared.name}>Всего</div>
          <div className={stylesShared.value}>{balance.total}</div>
        </div>
      </div>
    </div>
  );
};

BonusPointsInfo.propTypes = {
  bonusPointsInfo: PropTypes.object,
};
BonusPointsInfo.defaultProps = {
  bonusPointsInfo: {},
};

export default BonusPointsInfo;
