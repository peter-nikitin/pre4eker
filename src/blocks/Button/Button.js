import React, { useState } from "react";
import style from "./Button.css";
import dropdown from "Src/assets/shevron.svg";
import add from "Src/assets/add.svg";
import remove from "Src/assets/remove.svg";
import propTypes from "prop-types";

export default function Button({ action, type, size = "medium", ...props }) {
  const [status, changeStatus] = useState(`normal`);

  const typeOfButton = (icon) => {
    switch (icon) {
      case `DROPDOWN`:
        return { file: dropdown, className: `dropdown` };
      case `ADD`:
        return { file: add, className: `add` };
      case `REMOVE`:
        return { file: remove, className: `remove` };

      default:
        break;
    }
  };

  return (
    <button
      className={`${style[size]} ${style.button} ${style[status]} ${
        typeOfButton(type).className
      }`}
      onClick={() => action()}
      onMouseEnter={() => changeStatus(`hover`)}
      onMouseLeave={() => changeStatus(`normal`)}
    >
      <img src={typeOfButton(type).file} />
    </button>
  );
}

Button.propTypes = {
  action: propTypes.func,
  type: propTypes.string,
};
