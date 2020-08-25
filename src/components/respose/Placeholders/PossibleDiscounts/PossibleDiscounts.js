import React from "react";
import PropsTypes from "prop-types";
import stylesShared from "src/components/respose/responseShared.css";
import shortid from "shortid";

const PossibleDiscounts = ({ content, placeholder }) => {
  const { promotion, possibleDiscounts } = content;

  const amountTypes = {
    Percent: "В процентах",
    Absolute: "В рублях",
  };

  return (
    <>
      <div className={stylesShared.promo}>
        <div className={`${stylesShared.promoType} ${stylesShared.line}`}>
          Скидка на доп. товары
        </div>
        <div className={`${stylesShared.inline} ${stylesShared.line}`}>
          <div className={stylesShared.third}>
            <div className="line">
              <div className={stylesShared.name}>Тип скидки</div>
              <div className={`${stylesShared.value}  `}>
                {amountTypes[possibleDiscounts.discount.amountType]}
              </div>
            </div>
            <div className="line">
              <div className={stylesShared.name}>Сумма</div>
              <div className={`${stylesShared.value}  `}>
                {possibleDiscounts.discount.amount}
              </div>
            </div>
            <div className="line">
              <div className={stylesShared.name}>Кол-во</div>
              <div className={`${stylesShared.value}  `}>
                {possibleDiscounts.discountsCount}
              </div>
            </div>
          </div>
          <div className={stylesShared.third}>
            <div className={stylesShared.name}>Товары</div>
            <div className={`${stylesShared.value}  `}>
              {possibleDiscounts.products.map((product) => {
                const ProductIDS = Object.keys(product.ids);
                return (
                  <div key={shortid.generate()}>
                    {` ${product.ids[ProductIDS[0]]}`}
                  </div>
                );
              })}
            </div>
          </div>
          <div className={stylesShared.third}>
            <div className={stylesShared.name}>Плэйсхолдер</div>
            <div className={`${stylesShared.value}  `}>{placeholder}</div>
          </div>
        </div>

        {promotion && (
          <div className={`line ${stylesShared.promoFooter}`}>
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

PossibleDiscounts.defaultProps = {
  placeholder: "",
  content: {},
};

PossibleDiscounts.propTypes = {
  content: PropsTypes.object,
  placeholder: PropsTypes.string,
};

export default PossibleDiscounts;
