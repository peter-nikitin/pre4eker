import React from "react";
import style from './Button.css';
import shevron from "../../assets/shevron.svg";


export default function Button(props) {
  return (
    <div>
      <button
        className={style.button}
        onClick={() => props.toggleOptions()}
      >
        <img src={shevron} />
      </button>
    </div>
  );
}
