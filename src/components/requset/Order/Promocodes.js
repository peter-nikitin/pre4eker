import React from "react";
import PropTypes from "prop-types";

import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";
import arrayFunctions from "../arrayFunctions";

import style from "./Order.css";

const Promocodes = ({ promocodes, setPromocodes }) => {
  return (
    <div>
      <h4 className={style.h4}>Промокоды</h4>
      {promocodes.map((item) => (
        <div key={item.number} className={style.inline}>
          <Input
            label=""
            name={`Promocode-${item.number}`}
            value={item.externalSystem}
            onChange={(e) => {
              const upDatedValue = {
                ...item,
                code: e.target.value,
              };
              setPromocodes(
                arrayFunctions.updateItem(promocodes, upDatedValue)
              );
            }}
          />
          <Button
            action={() => setPromocodes(arrayFunctions.addItem(promocodes))}
            type="ADD"
          />
          <Button
            action={() =>
              setPromocodes(arrayFunctions.removeItem(promocodes, item))
            }
            type="REMOVE"
          />
        </div>
      ))}
    </div>
  );
};

Promocodes.propTypes = {
  promocodes: PropTypes.array,
  setPromocodes: PropTypes.func,
};
Promocodes.defaultProps = {
  promocodes: [],
  setPromocodes: () => ({}),
};

export default Promocodes;
