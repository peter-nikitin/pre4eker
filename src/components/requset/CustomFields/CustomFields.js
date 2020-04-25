import React from "react";
import PropsTypes from "prop-types";
import shortid from "shortid";

import Input from "src/components/Input/Input";
import style from "./CustomFields.css";

export default function CustomFields({
  addCustomField,
  fields,
  removeCustomField,
}) {
  const fieldsWithIDs = fields.map((filed) => ({
    ...filed,
    id: shortid.generate(),
  }));

  return (
    <div className={style.cf__wrapper}>
      <span className={style.cf__btlockName}>Дополнительные поля</span>
      <button
        className={style.cf__addBtn}
        onClick={() => addCustomField()}
        type="button"
      >
        +
      </button>
      {fieldsWithIDs &&
        fieldsWithIDs.map((item) => (
          <div className={style.cfImet} key={item.id}>
            <Input label="Идентификатор" name="externalID " />
            <Input label="Значение" name="value " />

            <button
              key={item.id}
              className={style.cf__removeBtn}
              onClick={(e) => removeCustomField(e)}
              type="button"
            >
              -
            </button>
          </div>
        ))}
    </div>
  );
}

CustomFields.propTypes = {
  addCustomField: PropsTypes.func.isRequired,
  fields: PropsTypes.array.isRequired,
  removeCustomField: PropsTypes.func.isRequired,
};
