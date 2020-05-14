import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Input from "src/components/Input/Input";
import arrayFunctions from "../arrayFunctions";

import CustomFields from "../CustomFields/CustomFields";
import ExternalPromo from "../ExternalPromo/ExternalPromo";

import style from "./Line.css";

const Line = ({ line, lines, setLines }) => {
  const { lineId, status, productId, externalSystem, quantity, price } = line;

  const [lineState, handleChangeLineState] = useState(line);

  useEffect(() => {
    setLines(arrayFunctions.updateItem(lines, lineState));
  }, [lineState]);

  return (
    <>
      {/* <p>Линия №{line.number}</p> */}
      <div className={style.inline}>
        <Input
          label="Ид линии"
          className={style.half}
          name={`Line-id-${line.number}`}
          value={lineId}
          onChange={(e) => {
            const upDatedValue = {
              ...line,
              lineId: e.target.value,
            };
            setLines(arrayFunctions.updateItem(lines, upDatedValue));
          }}
        />

        <Input
          label="Статус линии"
          className={style.half}
          name={`Line-status-${line.number}`}
          value={status || ""}
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
          value={externalSystem || "Website"}
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
          value={productId}
          onChange={(e) => {
            const upDatedValue = {
              ...line,
              productId: e.target.value,
            };
            setLines(arrayFunctions.updateItem(lines, upDatedValue));
          }}
        />
        <Input
          label="Количество"
          className={style.quarter}
          name={`Line-quantity-${line.number}`}
          value={quantity}
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
          value={price}
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
        body={lineState}
        setBody={handleChangeLineState}
        typeOfParrent="line"
      />
      <ExternalPromo
        body={lineState}
        setBody={handleChangeLineState}
        typeOfParrent="line"
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
