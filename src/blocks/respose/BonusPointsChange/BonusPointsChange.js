import React from "react";
import PropTypes from "prop-types";
import stylesShared from "src/blocks/respose/responseShared.css";

const BonusPointsChange = ({ bonusPointsChanges }) => {

  return (
    <div className={stylesShared.customer}>
      <div className={stylesShared.inline}>
        <div className={stylesShared.half}>
          <div className={stylesShared.promoType}>Изменения баллов</div>
        </div>
      </div>
      {bonusPointsChanges.map((change, i) => (
        <div  key={`bonusPointsChanges_${i}`} className={stylesShared.inline}>
          <div className={stylesShared.third}>
            <div className={stylesShared.name}>Балльный счет</div>
            <div className={stylesShared.value}>{change.balanceType.name}</div>
            <div className={`${stylesShared.status} ${stylesShared.neutral}`}>
              {change.balanceType.ids.systemName}
            </div>
          </div>
          <div className={stylesShared.third}>
            <div className={stylesShared.name}>Начислено</div>
            <div className={stylesShared.value}>
              {change.earnedAmount || "–"}
            </div>
          </div>
          <div className={stylesShared.third}>
            <div className={stylesShared.name}>Списано</div>
            <div className={stylesShared.half}>
              <div className={stylesShared.value}>
                {change.spentAmount || "–"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

BonusPointsChange.propTypes = {};

export default BonusPointsChange;
