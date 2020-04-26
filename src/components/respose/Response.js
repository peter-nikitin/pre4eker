import React from "react";
import PropTypes from "prop-types";

import EmptyResponse from "./EmptyResponse/EmptyResponse";
import ErrorResponse from "./ErrorResponse/ErrorResponse";
import SuccessResponse from "./SuccessResponse/SuccessResponse";

const Response = ({ response }) => {
  const drawResponse = (responseData) => {
    if (
      typeof responseData !== "undefined" &&
      Object.keys(responseData).length !== 0
    ) {
      switch (responseData.status) {
        case `ProtocolError`:
          return <ErrorResponse responseData={responseData} />;
        case `Success`:
          return <SuccessResponse responseData={responseData} />;
        default:
          return true;
      }
    }
    return <EmptyResponse />;
  };

  return drawResponse(response);
};

Response.propTypes = {
  response: PropTypes.object,
};

Response.defaultProps = {
  response: {},
};

export default Response;
