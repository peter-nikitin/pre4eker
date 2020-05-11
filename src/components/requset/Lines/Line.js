import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "src/components/Input/Input";
import arrayFunctions from "../arrayFunctions";

import CustomFields from "../CustomFields/CustomFields";
import ExternalPromo from "../ExternalPromo/ExternalPromo";

import style from "./Line.css";

const Line = ({ line, lines, setLines }) => {
  const [lineCustomField, setLineCustomFileds] = useState([]);
  const [lineExternalPromos, setLineExternalPromo] = useState([]);

  const updateLine = (filed, value) => {
    const upDatedValue = {
      ...line,
      [filed]: value,
    };
    setLines(arrayFunctions.updateItem(lines, upDatedValue));
  };

  const handleUpdateCustomField = (value) => {
    setLineCustomFileds(value);
    updateLine("customFileds", lineCustomField);
  };
  const handleExternalPromoUpdate = (value) => {
    setLineExternalPromo(value);
    updateLine("externalPromo", lineCustomField);
  };

  return (
    <>
      {/* <p>Линия №{line.number}</p> */}
      <div className={style.inline}>
        <Input
          label="Ид линии"
          className={style.half}
          name={`Line-id-${line.number}`}
          value={line.id}
          onChange={(e) => {
            const upDatedValue = {
              ...line,
              id: e.target.value,
            };
            setLines(arrayFunctions.updateItem(lines, upDatedValue));
          }}
        />

        <Input
          label="Статус линии"
          className={style.half}
          name={`Line-status-${line.number}`}
          value={line.status}
          onChange={(e) => {
            const upDatedValue = {
              ...line,
              status: e.target.value,
            };
            setLines(arrayFunctions.updateItem(lines, upDatedValue));
          }}
        />
      </div>
      <div className={style.inline}>
        <Input
          label="Внешняя система"
          className={style.quarter}
          name={`Line-externalSystem-${line.number}`}
          value={line.externalSystem}
          onChange={(e) => {
            const upDatedValue = {
              ...line,
              externalSystem: e.target.value,
            };
            setLines(arrayFunctions.updateItem(lines, upDatedValue));
          }}
        />
        <Input
          label="Идентификатор"
          className={style.quarter}
          name={`Line-id-${line.number}`}
          value={line.id}
          onChange={(e) => {
            const upDatedValue = {
              ...line,
              id: e.target.value,
            };
            setLines(arrayFunctions.updateItem(lines, upDatedValue));
          }}
        />
        <Input
          label="Количество"
          className={style.quarter}
          name={`Line-quantity-${line.number}`}
          value={line.quantity}
          onChange={(e) => {
            const upDatedValue = {
              ...line,
              quantity: e.target.value,
            };
            setLines(arrayFunctions.updateItem(lines, upDatedValue));
          }}
        />
        <Input
          label="Цена за 1 шт"
          className={style.quarter}
          name={`Line-price-${line.number}`}
          value={line.price}
          onChange={(e) => {
            const upDatedValue = {
              ...line,
              price: e.target.value,
            };
            setLines(arrayFunctions.updateItem(lines, upDatedValue));
          }}
        />
      </div>
      <CustomFields
        customFields={lineCustomField}
        setCustomFileds={handleUpdateCustomField}
        type="line"
      />
      <ExternalPromo
        externalPromos={lineExternalPromos}
        setExternalPromo={handleExternalPromoUpdate}
        type="line"
      />
    </>
  );
};

Line.propTypes = {
  line: PropTypes.object,
  lines: PropTypes.array,
  setLines: PropTypes.func,
};
Line.defaultProps = {
  line: {},
  lines: [],
  setLines: () => ({}),
};

export default Line;
