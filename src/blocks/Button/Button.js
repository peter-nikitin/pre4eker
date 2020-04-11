import React, {useState} from "react";
import style from './Button.css';
import dropdown from "../../assets/shevron.svg";
import add from "../../assets/add.svg";
import remove from "../../assets/remove.svg";
import propTypes from 'prop-types';

export default function Button({action, type, ...props}) {

  const [status, changeStatus ] = useState(`normal`)

  const typeOfButton = (type) => {
    switch (type) {
      case `DROPDOWN`:
          return {file: dropdown, type: `dropdown`};
      case `ADD`:
          return {file: add, type: `add`};;
      case `REMOVE`:
          return {file: remove, type: `remove`};;
    
      default:
        break;
    }
  }

  return ( 
      <button
        className={`${style.button} ${style[status]} ${typeOfButton(type).type}`}
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
  type: propTypes.string
}
