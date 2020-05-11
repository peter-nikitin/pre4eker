import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";

import style from "./IdField.css";

const IdField = ({ object, setObject, type }) => {
  const [field, setField] = useState();
  const [value, setValue] = useState();

  const updateObject = () => {
    if (field && value) {
      setObject({
        ...object,
        id: {
          [field]: value,
        },
      });
    }
  };

  return (
    <>
      <div className={style.inline}>
        <div className={style.half}>
          <Input
            label="Идентификатор"
            name={`${type}-id-field`}
            onChange={(e) => {
              setField(e.target.value);
              updateObject();
            }}
            value={field}
          />
        </div>
        <div className={style.half}>
          <Input
            label="Значение"
            name={`${type}-id-value`}
            onChange={(e) => {
              setValue(e.target.value);
              updateObject();
            }}
            value={value}
          />
        </div>
      </div>
      <p className={style.description}>
        Можно указать свое название идентификатора клиента
      </p>
    </>
  );
};

IdField.propTypes = {};

export default IdField;
