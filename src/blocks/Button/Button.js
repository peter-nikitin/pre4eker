import React, { useState } from "react";
import PropTypes from "prop-types";

import style from "./Button.css";
import add from "src/assets/add.svg";
import remove from "src/assets/remove.svg";

import  Shevron from "src/blocks/Icons/Shevron";
import  Add from "src/blocks/Icons/Add";
import  Remove from "src/blocks/Icons/Remove";



export default function Button({ action, type, size = "medium", ...props }) {
 

  const typeOfButton = (type) => {
    switch (type) {
      case `DROPDOWN`:
        return { icon: <Shevron />, styleClass: style.basic };
      case `ADD`:
        return { icon: <Add />, styleClass: style.add };
      case `REMOVE`:
        return { icon: <Remove />, styleClass: style.remove };

      default:
        break;
    }

  };

  const [status, changeStatus] = useState(`normal`);
  return (
    <button
      className={`${style[size]} ${style.button} ${style[status]} ${
        typeOfButton(type).styleClass
      }`}
      onClick={() => action()}
      onMouseEnter={() => changeStatus(`hover`)}
      onMouseLeave={() => changeStatus(`normal`)}
    >
    {typeOfButton(type).icon}
    </button>
  );
}

Button.propTypes = {
  action: PropTypes.func,
  type: PropTypes.string,
};
