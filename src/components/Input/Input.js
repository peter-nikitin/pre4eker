import React from "react";
import PropTypes from "prop-types";
import styles from "./input.css";

export default function Input({ label, name, onChange, type, value }) {
  const localValue = localStorage.getItem(name) || "";

  return (
    <div className={styles.inputItem}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        className={styles.input}
        name={name}
        value={value || localValue}
        onChange={(e) => {
          localStorage.setItem(name, e.target.value);
          onChange(e);
        }}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};
Input.defaultProps = {
  value: "",
  type: "text",
  label: "",
  name: "",
  onChange: () => ({}),
};
