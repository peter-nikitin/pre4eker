import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import toRuNumberFormat from "src/helpers/formatNumber";

import stylesShared from "src/components/respose/responseShared.css";

const BonusPointsChange = ({ bonusPointsChanges }) => {
  const changes = bonusPointsChanges.map((change) => ({
    ...change,
    id: shortid.generate(),
  }));

  return (
    <div className={stylesShared.promo}>
      <div className={stylesShared.line}>
        <div className={stylesShared.promoType}>Изменения баллов</div>
      </div>
      {changes.map((change) => (
        <div key={change.id} className={`  ${stylesShared.line}`}>
          <div className={stylesShared.line}>
            <div className={stylesShared.name}>Балльный счет</div>
            <div className={stylesShared.value}>{change.balanceType.name}</div>
            <div className={`${stylesShared.status} ${stylesShared.neutral}`}>
              {change.balanceType.ids.systemName}
            </div>
          </div>
          <div className={`${stylesShared.inline} ${stylesShared.line}`}>
            <div className={stylesShared.half}>
              <div className={stylesShared.name}>Начислено</div>
              <div className={stylesShared.value}>
                {toRuNumberFormat(change.earnedAmount) || "–"}
              </div>
            </div>
            <div className={stylesShared.half}>
              <div className={stylesShared.name}>Списано</div>

              <div className={stylesShared.value}>
                {toRuNumberFormat(change.spentAmount) || "–"}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

BonusPointsChange.propTypes = {
  bonusPointsChanges: PropTypes.array,
};

BonusPointsChange.defaultProps = {
  bonusPointsChanges: [],
};

export default BonusPointsChange;
