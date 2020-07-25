import React, { useState } from "react";
import PropTypes from "prop-types";

import Shevron from "src/components/Icons/Shevron";
import Cross from "src/components/Icons/Cross";
import Add from "src/components/Icons/Add";
import Remove from "src/components/Icons/Remove";
import style from "./Button.css";

export default function Button({
  action,
  type,
  size,
  active,
  children,
  passedClassName,
}) {
  const typeOfButton = (buttonType) => {
    switch (buttonType) {
      case "DROPDOWN":
        return { icon: <Shevron />, styleClass: style.basic };
      case "ADD":
        return { icon: <Add />, styleClass: style.add };
      case "REMOVE":
        return { icon: <Remove />, styleClass: style.remove };
      case "TEXT":
        return { icon: children, styleClass: style.basic };
      case "CROSS":
        return { icon: <Cross />, styleClass: style.basic };

      default:
        return { icon: <Shevron />, styleClass: style.basic };
    }
  };

  const [status, changeStatus] = useState("normal");
  return (
    <button
      className={`${passedClassName} ${style[size]} ${style.button} ${
        style[status]
      } ${active && style.active} ${typeOfButton(type).styleClass}`}
      onClick={(e) => action(e)}
      onMouseEnter={() => changeStatus("hover")}
      onMouseLeave={() => changeStatus("normal")}
      type="button"
    >
      {typeOfButton(type).icon}
    </button>
  );
}

Button.defaultProps = {
  action: () => ({}),
  type: "",
  size: "medium",
  active: false,
  children: "",
  passedClassName: "",
};
Button.propTypes = {
  action: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.string,
  passedClassName: PropTypes.string,
};
