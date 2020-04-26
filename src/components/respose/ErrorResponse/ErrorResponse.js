import React from "react";
import PropTypes from "prop-types";
import sharedStyles from "../responseShared.css";
import responseStyles from "../Response.css";

const ErrorResponse = ({ responseData }) => {
  return (
    <div className={responseStyles.response}>
      <h2>Ошибка в запросе</h2>
      <div className={sharedStyles.error}>
        <div className={sharedStyles.line}>
          <div className={sharedStyles.name}>Текст ошибки</div>
          <div className={sharedStyles.value}>{responseData.errorMessage}</div>
        </div>
        <div className={sharedStyles.line}>
          <div className={sharedStyles.name}>ИД ошибки</div>
          <div className={sharedStyles.value}>{responseData.errorId}</div>
        </div>
      </div>
    </div>
  );
};

ErrorResponse.propTypes = {
  responseData: PropTypes.object,
};
ErrorResponse.defaultProps = {
  responseData: {},
};

export default ErrorResponse;
