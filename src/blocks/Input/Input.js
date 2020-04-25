import React from "react";
import PropTypes from "prop-types";
import styles from "./input.css";

export default function Input({ label, name, onChange }) {
  return (
    <div className={styles.inputItem}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type="text"
        className={styles.input}
        name={name}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};
Input.defaultProps = {
  label: "",
  name: "",
  onChange: () => ({}),
};
