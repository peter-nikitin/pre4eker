import React from "react";
import PropTypes from "prop-types";

import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";
import arrayFunctions from "../arrayFunctions";

import style from "./Order.css";

const Promocodes = ({ promocodes, setPromocodes }) => {
  return (
    <div>
      <div className={`${style.inline} ${style.center}`}>
        <h4 className={style.h4}>Промокоды</h4>
        <Button
          action={() => setPromocodes(arrayFunctions.addItem(promocodes))}
          type="ADD"
        />
      </div>
      {promocodes.map((item) => (
        <div key={item.number} className={`${style.promoItem} ${style.gutter}`}>
          <Input
            label=""
            className={` ${style.cell}   ${style.promoItemInput}`}
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
          <div
            className={`${style.inline}  ${style.cell} ${style.promoItemBtns}`}
          >
            <Button
              action={() =>
                setPromocodes(arrayFunctions.removeItem(promocodes, item))
              }
              type="REMOVE"
            />
          </div>
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
