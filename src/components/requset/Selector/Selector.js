import React, { useState } from "react";
import PropsTypes from "prop-types";
import shortid from "shortid";

import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";
import style from "./Selector.css";

export default function Selector({
  selected,
  options,
  changeSelection,
  label,
  onInputChange,
}) {
  const [isOptionsShown, toggleOptions] = useState(false);
  const handleKeyPress = () => {};
  const toggle = () => toggleOptions(!isOptionsShown);
  const optionWithIDs = Object.keys(options).map((option) => ({
    ...option,
    id: shortid.generate(),
  }));
  return (
    <div className={style.selector}>
      <div className={style.half}>
        <label htmlFor={options[selected]} className={style.label}>
          {label || "Поле"}
        </label>
        <div className={style.selectorGroup}>
          <Button toggleOptions={toggle} />
          <input
            type="text"
            name={options[selected]}
            className={style.field}
            value={selected === "externalId" ? "" : options[selected]}
            onChange={() => onInputChange}
            placeholder="Название идентификатора"
          />
        </div>
        {isOptionsShown && (
          <ul className={style.list}>
            {optionWithIDs.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  changeSelection(item);
                  toggleOptions(!isOptionsShown);
                }}
                role="menuitem"
                onKeyPress={handleKeyPress}
              >
                <button type="button" className={style.listItem}>
                  {options[item]}
                </button>
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

Selector.defaultProps = {
  selected: false,
  options: [],
  label: "",
};
Selector.propTypes = {
  selected: PropsTypes.bool,
  options: PropsTypes.array,
  changeSelection: PropsTypes.func.isRequired,
  label: PropsTypes.string,
  onInputChange: PropsTypes.func.isRequired,
};
