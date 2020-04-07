import React, { useState } from "react";
import shevron from "../../assets/shevron.svg";
import Input from "../Input/Input";
import style from "./Selector.css";

export default function Selector(props) {
  const [isOptionsShown, toggleOptions] = useState(false);
  const { selected, options, changeSelection, label } = props;

  return (
    <div className={style.selector}>
      <div className={style.half}>
        <label htmlFor="" className={style.label}>
          {label || "Поле"}
        </label>
        <div className={style.selectorGroup}>
          <button
            className={style.button}
            onClick={() => toggleOptions(!isOptionsShown)}
          >
            <img src={shevron} />
          </button>
          <input
            type="text"
            className={style.field}
            value={selected === "externalId" ? "" : options[selected]}
            onChange={(evetn) => props.onInputChange}
            placeholder="Название идентификатора"
          />
        </div>
        {isOptionsShown && (
          <ul className={style.list}>
            {Object.keys(options).map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  changeSelection(item);
                  toggleOptions(!isOptionsShown);
                }}
              >
                <button className={style.listItem}>{options[item]}</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={style.half}>
        <Input label={options[selected]} name={selected} />
      </div>
      {selected === "externalId" && (
        <p className={style.description}>
          Введите название поля идентификатора
        </p>
      )}
    </div>
  );
}
