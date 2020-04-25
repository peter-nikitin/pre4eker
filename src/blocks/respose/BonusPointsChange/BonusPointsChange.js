import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import stylesShared from "src/blocks/respose/responseShared.css";

const BonusPointsChange = ({ bonusPointsChanges }) => {
  const changes = bonusPointsChanges.map((change) => ({
    ...change,
    id: shortid.generate(),
  }));

  return (
    <div className={stylesShared.promo}>
      <div className={stylesShared.inline}>
        <div className={stylesShared.half}>
          <div className={stylesShared.promoType}>Изменения баллов</div>
        </div>
      </div>
      {changes.map((change) => (
        <div key={change.id} className={stylesShared.inline}>
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

BonusPointsChange.propTypes = {
  bonusPointsChanges: PropTypes.array,
};

BonusPointsChange.defaultProps = {
  bonusPointsChanges: [],
};

export default BonusPointsChange;
