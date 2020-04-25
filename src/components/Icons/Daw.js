import React from "react";
import PropTypes from "prop-types";

const Daw = ({ color }) => (
  <div>
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 3.38089L7.23659 16L0 8.84522L3.41954 5.46434L7.23659 9.23823L16.5805 0L20 3.38089Z"
        fill={color}
      />
    </svg>
  </div>
);

Daw.defaultProps = {
  color: "#000",
};

Daw.propTypes = {
  color: PropTypes.string,
};

export default Daw;
