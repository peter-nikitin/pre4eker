import React from "react";
import PropTypes from "prop-types";
import stylesShared from "src/blocks/respose/responseShared.css";

import AppliedPromotion from "../AppliedPromotion/AppliedPromotion";

const Line = ({ lineInfo }) => {
  const {
    product,
    quantity,
    basePricePerItem,
    discountedPriceOfLine,
    status,
    lineNumber,
    lineId,
    appliedPromotions,
    placeholders,
  } = lineInfo;

  return (
    <div>
      <div className={stylesShared.customer}>
        <div className={stylesShared.inline}>
          <div className={`${stylesShared.third}`}>
            <div className={`${stylesShared.status} ${stylesShared.neutral}`}>
              <div>№ линии: {lineNumber}</div>
              <div>ID линии: {lineId}</div>
            </div>
          </div>
          <div className={stylesShared.third}>
            <div className={stylesShared.name}>Ид продукта</div>
            <div> {product.ids[Object.keys(product.ids)[0]]}</div>
          </div>
          <div className={stylesShared.third}>
            <div className={stylesShared.name}>Количество</div>
            <div> {quantity}</div>
          </div>
        </div>
        <div className={stylesShared.inline}>
          <div className={stylesShared.half}>
            <div className={stylesShared.value}>До скидки</div>
            <div className={stylesShared.promoValue}>{basePricePerItem}</div>
          </div>
          <div className={stylesShared.half}>
            <div className={stylesShared.value}>Итого</div>
            <div className={stylesShared.promoValue}>
              {discountedPriceOfLine}
            </div>
          </div>
        </div>
      </div>
      {appliedPromotions &&
        appliedPromotions.map((promo, i) => (
          <AppliedPromotion key={`line_prmo_${i}`} promoInfo={promo} />
        ))}
    </div>
  );
};

Line.propTypes = {};

export default Line;
