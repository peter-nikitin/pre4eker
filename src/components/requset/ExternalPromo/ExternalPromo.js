import React from "react";
import PropTypes from "prop-types";

import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";

import style from "./ExternalPromo.css";

import arrayFunctions from "../arrayFunctions";

const ExternalPromo = ({ externalPromos, setExternalPromo, type }) => {
  return (
    <div className={style.externalPromo}>
      <div className={`${style.inline}`}>
        <h4 className={style.h4}>Внешние промоакции</h4>
        <Button
          action={() =>
            setExternalPromo(arrayFunctions.addItem(externalPromos))
          }
          type="ADD"
        />
      </div>

      {externalPromos.map((item) => (
        <div key={item.number} className={`${style.item}`}>
          <div className={`${style.inline}`}>
            <div className={`${style.inline} ${style.promoTypeBtns}`}>
              <Button
                type="TEXT"
                size="sizeAuto"
                active={item.type === "external"}
                action={() => {
                  const upDatedValue = {
                    ...item,
                    type: "external",
                  };
                  setExternalPromo(
                    arrayFunctions.updateItem(externalPromos, upDatedValue)
                  );
                }}
              >
                Внешняя
              </Button>
              <Button
                type="TEXT"
                size="sizeAuto"
                active={item.type === "mindbox"}
                action={() => {
                  const upDatedValue = {
                    ...item,
                    type: "mindbox",
                  };
                  setExternalPromo(
                    arrayFunctions.updateItem(externalPromos, upDatedValue)
                  );
                }}
              >
                Mindbox
              </Button>
            </div>
            <Button
              action={() => {
                setExternalPromo(
                  arrayFunctions.removeItem(externalPromos, item)
                );
              }}
              type="REMOVE"
            />
          </div>
          <div className={style.inline}>
            <div className={style.half}>
              <Input
                label="ИД"
                name={`externalPromo-${type}-${item.number}-id`}
                value={item.id}
                onChange={(e) => {
                  const upDatedValue = {
                    ...item,
                    id: e.target.value,
                  };
                  setExternalPromo(
                    arrayFunctions.updateItem(externalPromos, upDatedValue)
                  );
                }}
              />
            </div>
            <div className={style.half}>
              <Input
                label="Сумма"
                name={`externalProm-${type}-${item.number}-value`}
                value={item.value}
                onChange={(e) => {
                  const upDatedValue = {
                    ...item,
                    value: e.target.value,
                  };
                  setExternalPromo(
                    arrayFunctions.updateItem(externalPromos, upDatedValue)
                  );
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ExternalPromo.propTypes = {
  externalPromos: PropTypes.array,
  setExternalPromo: PropTypes.func,
  type: PropTypes.string,
};

ExternalPromo.defaultProps = {
  externalPromos: [],
  setExternalPromo: () => ({}),
  type: "",
};
export default ExternalPromo;
