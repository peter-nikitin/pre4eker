import React from "react";
import PropTypes from "prop-types";

import stylesShared from "src/blocks/respose/responseShared.css";

const Text = ({ content, placeholder }) => {
  const { promotion } = content;
  return (
    <div>
      <div className={stylesShared.promo}>
        <div className={`${stylesShared.promoType} ${stylesShared.line}`}>
          Сообщение
        </div>
        <div className="inline line">
          <div className={stylesShared.half}>
            <div className={stylesShared.name}>Текст</div>
            <div className={`${stylesShared.value}  `}>{content.message}</div>
          </div>
          <div className={stylesShared.half}>
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
    </div>
  );
};

Text.defaultProps = {
  placeholder: "",
  content: {},
};

Text.propTypes = {
  content: PropTypes.object,
  placeholder: PropTypes.string,
};

export default Text;
