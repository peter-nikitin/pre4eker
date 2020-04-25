import React from "react";
import PropTypes from "prop-types";

const Add = ({ color }) => (
  <div>
    <svg
      width="7"
      height="6"
      viewBox="0 0 7 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.06 3.16H3.828V5.344H3.072V3.16H0.84V2.452H3.072V0.256H3.828V2.452H6.06V3.16Z"
        fill={color}
      />
    </svg>
  </div>
);

Add.defaultProps = {
  color: "#000",
};

Add.propTypes = {
  color: PropTypes.string,
};

export default Add;
