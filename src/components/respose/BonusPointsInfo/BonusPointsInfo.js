import React from "react";
import PropTypes from "prop-types";
import stylesShared from "src/components/respose/responseShared.css";

import toRuNumberFormat from "src/helpers/formatNumber";

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
      <div className={stylesShared.line}>
        <div className={stylesShared.promoType}>Информация о баллах</div>
      </div>

      <div className={stylesShared.line}>
        <div className={stylesShared.name}>Статус обработки</div>
        <div className={stylesShared.value}>{statuses[status] || status}</div>
      </div>

      <div className={`${stylesShared.inline} ${stylesShared.line}`}>
        <div className={stylesShared.half}>
          <div className={stylesShared.name}>Доступно для списание</div>
          <div className={stylesShared.promoValue}>
            {toRuNumberFormat(availableAmountForCurrentOrder)}
          </div>
        </div>

        <div className={stylesShared.half}>
          <div className={stylesShared.name}>Будет списано</div>

          <div className={stylesShared.promoValue}>
            {toRuNumberFormat(spentAmountForCurrentOrder)}
          </div>
        </div>
      </div>

      <div className={stylesShared.promoType}>Баланс</div>
      <div className={stylesShared.inline}>
        <div className={stylesShared.third}>
          <div className={stylesShared.name}>Доступно</div>
          <div className={stylesShared.value}>
            {toRuNumberFormat(balance.available)}
          </div>
        </div>
        <div className={stylesShared.third}>
          <div className={stylesShared.name}>Блок</div>
          <div className={stylesShared.value}>
            {toRuNumberFormat(balance.blocked)}
          </div>
        </div>
        <div className={stylesShared.third}>
          <div className={stylesShared.name}>Всего</div>
          <div className={stylesShared.value}>
            {toRuNumberFormat(balance.total)}
          </div>
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
