import React from "react";

const Daw = (props) => {
  return (
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
          fill={props.color || '#000'}
        />
      </svg>
    </div>
  );
};

export default Daw;
