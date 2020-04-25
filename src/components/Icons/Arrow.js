import React from "react";
import PropTypes from "prop-types";

const Arrow = ({ color }) => (
  <div>
    <svg
      width="14"
      height="19"
      viewBox="0 0 14 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.99998 0L13.9282 12H0.0717773L6.99998 0Z" fill={color} />
      <path d="M3.99998 11H9.99998V19H3.99998V11Z" fill={color} />
    </svg>
  </div>
);

Arrow.defaultProps = {
  color: "#000",
};

Arrow.propTypes = {
  color: PropTypes.string,
};

export default Arrow;
