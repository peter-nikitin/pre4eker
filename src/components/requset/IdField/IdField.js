import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";

import style from "./IdField.css";

const IdField = ({ object, setObject, type }) => {
  const [field, setField] = useState("mindbox");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (field && value) {
      setObject({
        ...object,
        ids: {
          [field]: value,
        },
      });
    }
  }, [field, value]);
  // const updateObject = () => {

  // };

  return (
    <>
      <div className={style.inline}>
        <div className={style.half}>
          <Input
            label="Идентификатор"
            name={`${type}-id-field`}
            value={field}
            onChange={(e) => {
              setField(e.target.value);
            }}
          />
        </div>
        <div className={style.half}>
          <Input
            label="Значение"
            name={`${type}-id-value`}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
      </div>
      <p className={style.description}>
        Можно указать свое название идентификатора клиента
      </p>
    </>
  );
};

IdField.propTypes = {
  object: PropTypes.object,
  setObject: PropTypes.func,
  type: PropTypes.string,
};
IdField.defaultProps = {
  object: {},
  setObject: () => ({}),
  type: "",
};

export default IdField;
