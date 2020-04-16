import React from "react";
import PropTypes from "prop-types";
import stylesShared from "src/customer.css";

const BonusPointsChange = ({ bonusPointsChanges }) => {
  const {
    balanceType,
    earnedAmount,
    spentAmount,
  } = bonusPointsChanges;

  return (
    <div className={stylesShared.customer}>
      <div className={stylesShared.inline}>
        <div className={stylesShared.half}>
          <div className={stylesShared.promoType}>Изменения баллов</div>
        </div>

        <div className={stylesShared.half}>
          <div className={stylesShared.name}>Балльный счет</div>
          <div className={stylesShared.value}>{balanceType.name}</div>
          <div className={stylesShared.status}>{balanceType.ids.systemName}</div>
        </div>
      </div>
      <div className={stylesShared.inline}>
        <div className={stylesShared.half}>
          <div className={stylesShared.name}>
          Начислено
          </div>
          <div className={stylesShared.promoValue}>
            {earnedAmount || "–"}
          </div>
        </div>
      <div className={stylesShared.half}>
      <div className={stylesShared.name}>
        Списано 
          </div>
          <div className={stylesShared.half}>
            <div className={stylesShared.promoValue}>
            {spentAmount || "–"}
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

BonusPointsChange.propTypes = {};

export default BonusPointsChange;
