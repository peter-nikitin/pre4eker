import React from "react";
import PropTypes from "prop-types";

import EmptyResponse from "./EmptyResponse/EmptyResponse";
import ErrorResponse from "./ErrorResponse/ErrorResponse";
import SuccessResponse from "./SuccessResponse/SuccessResponse";
import Loading from "../Loading/Loading";

import style from "./Response.css";

const Response = ({ response, isLoading }) => {
  const drawResponse = (responseData) => {
    if (isLoading) {
      return <Loading />;
    }
    if (Object.keys(responseData).length !== 0) {
      switch (responseData.status) {
        case `ProtocolError`:
          return (
            <>
              <h2 className={style.header}>Ошибка </h2>
              <ErrorResponse responseData={responseData} />{" "}
            </>
          );
        case `Success`:
          return (
            <>
              <h2 className={style.header}>Расчет заказа</h2>
              <SuccessResponse responseData={responseData} />
            </>
          );
        default:
          return <ErrorResponse responseData={responseData} />;
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
