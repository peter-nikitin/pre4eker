import React from "react";
import PropTypes from "prop-types";
import stylesShared from "src/blocks/respose/responseShared.css";
import shortid from "shortid";

import AppliedPromotion from "../AppliedPromotion/AppliedPromotion";
import Placeholders from "../Placeholders/Placeholders";

const Line = ({ lineInfo }) => {
  const {
    product,
    quantity,
    basePricePerItem,
    discountedPriceOfLine,
    lineNumber,
    lineId,
    appliedPromotions,
    placeholders,
  } = lineInfo;

  let promoWithIDs;
  if (typeof appliedPromotions !== "undefined") {
    promoWithIDs = appliedPromotions.map((promo) => ({
      ...promo,
      id: shortid.generate(),
    }));
  }
  return (
    <div>
      <div className={stylesShared.customer}>
        <div className={`${stylesShared.inline} ${stylesShared.line}`}>
          <div className={`${stylesShared.third}`}>
            <div className={`${stylesShared.status} ${stylesShared.neutral}`}>
              <div>№ линии: {lineNumber}</div>
              {lineId && <div>{`ID линии: ${lineId}`}</div>}
            </div>
          </div>
          <div className={stylesShared.third}>
            <div className={stylesShared.name}>Ид продукта</div>
            {product.ids[Object.keys(product.ids)[0]]}
          </div>
          <div className={stylesShared.third}>
            <div className={stylesShared.name}>Количество</div>
            {quantity}
          </div>
        </div>
        <div className={stylesShared.inline}>
          <div className={stylesShared.half}>
            <div className={stylesShared.name}>Базовая цена</div>
            <div className={stylesShared.promoValue}>{basePricePerItem}</div>
          </div>
          <div className={stylesShared.half}>
            <div className={stylesShared.name}>Сумма по линии</div>
            <div className={stylesShared.promoValue}>
              {discountedPriceOfLine}
            </div>
          </div>
        </div>
      </div>
      {appliedPromotions &&
        promoWithIDs.map((promo) => (
          <AppliedPromotion key={promo.id} promoInfo={promo} />
        ))}
      {placeholders && <Placeholders placeholders={placeholders} />}
    </div>
  );
};

Line.propTypes = {
  lineInfo: PropTypes.object,
};
Line.defaultProps = {
  lineInfo: {},
};

export default Line;
