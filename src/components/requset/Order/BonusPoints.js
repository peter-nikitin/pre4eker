import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";
import arrayFunctions from "../arrayFunctions";

import style from "./Order.css";

const BonusPoints = ({ orderBody, setOrderBody }) => {
  let initialBonusPoints;
  if (typeof orderBody.bonusPoints !== "undefined") {
    initialBonusPoints = orderBody.bonusPoints.map((bonusPointItem, index) => ({
      number: index,
      value: bonusPointItem.amount,
    }));
  } else {
    initialBonusPoints = [];
  }

  const [bonusPoints, setbonusPoints] = useState([...initialBonusPoints]);

  useEffect(() => {
    const bunusPointsForBody = bonusPoints.map((bonusPointItem) => ({
      amount: bonusPointItem.value,
    }));
    if (bonusPoints.length > 0) {
      setOrderBody({
        ...orderBody,

        bonusPoints: bunusPointsForBody,
      });
    }
  }, [bonusPoints]);

  return (
    <div>
      <div className={`${style.inline} ${style.center}`}>
        <h4 className={style.h4}>Баллы</h4>
        <Button
          action={() => setbonusPoints(arrayFunctions.addItem(bonusPoints))}
          type="ADD"
        />
      </div>

      {bonusPoints.map((item) => (
        <div key={item.number} className={`${style.promoItem} ${style.gutter}`}>
          <Input
            label=""
            className={` ${style.cell}   ${style.promoItemInput}`}
            name={`bonusPoints-${item.number}`}
            value={item.value}
            onChange={(e) => {
              const upDatedValue = {
                ...item,
                value: e.target.value,
              };
              setbonusPoints(
                arrayFunctions.updateItem(bonusPoints, upDatedValue)
              );
            }}
          />
          <div className={`${style.inline}    ${style.promoItemBtns}`}>
            <Button
              action={() =>
                setbonusPoints(arrayFunctions.removeItem(bonusPoints, item))
              }
              type="REMOVE"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

BonusPoints.propTypes = {
  orderBody: PropTypes.object,
  setOrderBody: PropTypes.func,
};
BonusPoints.defaultProps = {
  orderBody: {},
  setOrderBody: () => ({}),
};

export default BonusPoints;
