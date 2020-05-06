import React from "react";
import PropTypes from "prop-types";

import EmptyResponse from "./EmptyResponse/EmptyResponse";
import ErrorResponse from "./ErrorResponse/ErrorResponse";
import SuccessResponse from "./SuccessResponse/SuccessResponse";
import Loading from "../Loading/Loading";

const Response = ({ response, isLoading }) => {
  const drawResponse = (responseData) => {
    if (isLoading) {
      return <Loading />;
    }
    if (Object.keys(responseData).length !== 0) {
      switch (responseData.status) {
        case `ProtocolError`:
          return <ErrorResponse responseData={responseData} />;
        case `Success`:
          return <SuccessResponse responseData={responseData} />;
        default:
          return <SuccessResponse responseData={responseData} />;
      }
    }
    return <EmptyResponse />;
  };

  return drawResponse(response);
};

Response.propTypes = {
  response: PropTypes.object,
  isLoading: PropTypes.bool,
};

Response.defaultProps = {
  response: {},
  isLoading: false,
};

export default Response;
