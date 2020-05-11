import React from "react";
import PropsTypes from "prop-types";

import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";

import style from "./CustomFields.css";

import arrayFunctions from "../arrayFunctions";

const CustomFields = ({ customFields, setCustomFileds, type }) => {
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
              name={`customField-${type}-${item.number}-field`}
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
              name={`customField-${type}-${item.number}-value`}
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
  customFields: PropsTypes.array,
  setCustomFileds: PropsTypes.func,
  type: PropsTypes.string,
};

CustomFields.defaultProps = {
  customFields: [],
  setCustomFileds: () => ({}),
  type: "",
};

export default CustomFields;
