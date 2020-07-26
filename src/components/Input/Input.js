import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import Button from "src/components/Button/Button";
import styles from "./input.css";

export default function Input({
  label,
  name,
  onChange,
  type,
  value,
  className,
  onBlur,
  options,
  onOptionClick,
}) {
  const [isOptionsVisible, handleOptionsVisibilityChange] = useState(false);

  const input = useRef(false);

  return (
    <div className={`${styles.inputItem} ${className}`}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputGroup}>
        <input
          type={type}
          ref={input}
          className={styles.input}
          name={name}
          value={value}
          id={name}
          onChange={(e) => {
            onChange(e);
          }}
          onBlur={onBlur}
        />

        {options && options.length > 0 && (
          <>
            <Button
              type="DROPDOWN"
              action={() => handleOptionsVisibilityChange(!isOptionsVisible)}
              passedClassName={styles.inputBtn}
            />
            {isOptionsVisible && (
              <ul className={styles.dropdown}>
                {options.map((option) => (
                  <li key={option} className={styles.listItem}>
                    <button
                      className={styles.listItemBtn}
                      type="button"
                      onClick={() => {
                        onOptionClick(option);
                        handleOptionsVisibilityChange(!isOptionsVisible);
                      }}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
};
Input.defaultProps = {
  value: "",
  type: "text",
  label: "",
  name: "",
  className: "",
  options: [],
  onChange: () => ({}),
};
