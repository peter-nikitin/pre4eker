import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";

import style from "./CustomFields.css";

import arrayFunctions from "../arrayFunctions";

const CustomFields = ({ body, setBody, typeOfParrent }) => {
  let initialCustomFileds;
  if (typeof body.customFields !== "undefined") {
    initialCustomFileds = Object.keys(body.customFields).map(
      (customField, index) => ({
        number: index,
        field: customField,
        value: body.customFields[customField],
      })
    );
  } else {
    initialCustomFileds = [];
  }

  const [customFields, setCustomFileds] = useState([...initialCustomFileds]);

  useEffect(() => {
    let customFieldsToState = {};
    customFields.forEach(({ field, value }) => {
      if (typeof value !== "undefined" && typeof field !== "undefined") {
        customFieldsToState = { ...customFieldsToState, [field]: value };
      }
      return false;
    });

    if (Object.keys(customFieldsToState).length > 0) {
      setBody({
        ...body,
        customFields: customFieldsToState,
      });
    }
  }, [customFields]);

  return (
    <div className={style.customFields}>
      <div className={style.inline}>
        <h4 className={style.h4}>Дополнительные поля</h4>
        <Button
          action={() => setCustomFileds(arrayFunctions.addItem(customFields))}
          type="ADD"
        />
      </div>

      {customFields.map((item) => (
        <div key={item.number} className={`${style.item} ${style.inline}`}>
          <div>
            <Input
              label="Название поля"
              name={`customField-${typeOfParrent}-${item.number}-field`}
              value={item.field}
              onChange={(e) => {
                const upDatedValue = {
                  ...item,
                  field: e.target.value,
                };
                setCustomFileds(
                  arrayFunctions.updateItem(customFields, upDatedValue)
                );
              }}
            />
          </div>
          <div>
            <Input
              label="Значение поля"
              name={`customField-${typeOfParrent}-${item.number}-value`}
              value={item.value}
              onChange={(e) => {
                const upDatedValue = {
                  ...item,
                  value: e.target.value,
                };
                setCustomFileds(
                  arrayFunctions.updateItem(customFields, upDatedValue)
                );
              }}
            />
          </div>
          <Button
            action={() => {
              setCustomFileds(arrayFunctions.removeItem(customFields, item));
            }}
            type="REMOVE"
          />
        </div>
      ))}
    </div>
  );
};

CustomFields.propTypes = {
  body: PropTypes.object,
  setBody: PropTypes.func,
  typeOfParrent: PropTypes.string,
};

CustomFields.defaultProps = {
  body: {},
  setBody: () => ({}),
  typeOfParrent: "",
};

export default CustomFields;
