import React, { useState } from "react";
import PropTypes from "prop-types";
import stylesShared from "src/blocks/respose/responseShared.css";
import Button from "src/blocks/Button/Button";
import shortid from "shortid";

const CustomFields = ({ data }) => {
  const keys = Object.keys(data);

  const [showCustomFields, toggle] = useState(false);

  const drawValues = (values) => {
    switch (typeof values) {
      case "object":
        return values.map((value) => (
          <div key={shortid.generate()}>
            {`${value}` || <span className={stylesShared.neutral}>Пусто</span>}
          </div>
        ));
      default:
        return (
          `${values}` || <span className={stylesShared.neutral}>Пусто</span>
        );
    }
  };

  return (
    <div>
      <div className={stylesShared.name}>
        Дополнительные поля
        <Button
          type="DROPDOWN"
          size="small"
          action={() => toggle(!showCustomFields)}
        />
      </div>

      {showCustomFields &&
        keys.map((field) => (
          <div
            key={shortid.generate()}
            className={`${stylesShared.inline} ${stylesShared.line}`}
          >
            <div className={`${stylesShared.half} ${stylesShared.value}`}>
              {field}
            </div>
            <div className={`${stylesShared.half} ${stylesShared.value}`}>
              {drawValues(data[field])}
            </div>
          </div>
        ))}
    </div>
  );
};

CustomFields.propTypes = {
  data: PropTypes.object,
};
CustomFields.defaultProps = {
  data: {},
};

export default CustomFields;
