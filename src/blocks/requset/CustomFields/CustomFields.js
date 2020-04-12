import React from "react";
import style from "./CustomFields.css";

import Input from "Src/blocks/Input/Input.js";

export default function CustomFields(props) {
  const { addCustomField, fields, removeCustomField } = props;

  return (
    <div className={style.cf__wrapper}>
      <span className={style.cf__btlockName}>Дополнительные поля</span>
      <button
        className={style.cf__addBtn}
        onClick={() => props.addCustomField()}
      >
        +
      </button>
      {fields &&
        fields.map((item, index) => (
          <div className={style.cfImet} key={`cf_${index}`}>
            <Input label="Идентификатор" name="externalID " />
            <Input label="Значение" name="value " />

            <button
              className={style.cf__removeBtn}
              onClick={(e) => props.removeCustomField(e)}
            >
              -
            </button>
          </div>
        ))}
    </div>
  );
}
