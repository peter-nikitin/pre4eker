import React from "react";
import PropTypes from "prop-types";
import Input from "src/components/Input/Input";
import style from "./optional.css";

export default function Optional({ field, addCF }) {
  const cf = [
    {
      label: "Название доп. поля",
      name: "customFieldExternalId",
    },
    {
      label: "Значение",
      name: "customFieldVslue",
    },
  ];
  // console.log(props)
  return (
    <div className={style.optional}>
      <span className={style.optionalName}>{field.label}</span>
      <button
        className={style.optionalBtn}
        onClick={() => addCF()}
        type="button"
      >
        +
      </button>
      {field.fields.map((item) => (
        <div key={item.id} className={style.cf}>
          <Input field={cf[0]} />
          <Input field={cf[1]} />
        </div>
      ))}
    </div>
  );
}

Optional.propTypes = {
  field: PropTypes.object.isRequired,
  addCF: PropTypes.func.isRequired,
};
