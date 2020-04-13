import React, { useState } from "react";
import PropTypes from "prop-types";
import stylesShared from "../Customer/customer.css";
import Button from "Src/blocks/Button/Button";

const CustomFields = ({ data }) => {
  const keys = Object.keys(data);

  const [showCustomFields, toggle] = useState(false);

  return (
    <div>
      <div className={stylesShared.name}>
        Дополнительные поля{" "}
        <Button type="DROPDOWN" action={() => toggle(!showCustomFields)} />
      </div>

      {showCustomFields &&
        keys.map((item, index) => (
          <div key={`keys ${index}`}>
            <div className={stylesShared.half}>{item}</div> 
            {typeof data[item] === `object` ? (
              <div className={stylesShared.half}>
                {data[item].map((value, i) => (
                  <p key={`item ${i}`}>{value}</p>
                ))}
              </div>
            ) : (
              <div className={stylesShared.half}>{data[item]}</div>
            )}
          </div>
        ))}
    </div>
  );
};

CustomFields.propTypes = {
  data: PropTypes.object,
};

export default CustomFields;
