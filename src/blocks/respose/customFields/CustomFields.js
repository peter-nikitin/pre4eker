import React, { useState } from "react";
import PropTypes from "prop-types";
import stylesShared from "src/customer.css";
import Button from "src/blocks/Button/Button";

const CustomFields = ({ data }) => {
  const keys = Object.keys(data);

  const [showCustomFields, toggle] = useState(false);

  const drawValues = (values) =>{
   switch (typeof values) {
     case 'object':
       return values.map((value, i) => (
        <div key={`item ${i}`}>
          {`${value}` || <span className={stylesShared.neutral}>Пусто</span>}
        </div>
      ));   
     default:
      return `${values}` || (
        <span className={stylesShared.neutral}>Пусто</span>
      ) 
   }
   }

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
        keys.map((field, index) => (
          <div key={`field ${index}`} className={stylesShared.inline}>
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

export default CustomFields;
