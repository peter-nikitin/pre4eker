import React from "react";
import PropTypes from "prop-types";

import Customer from "./Customer/Customer";
import Order from "./Order/Order";
import Lines from "./Lines/Lines";
import styles from "./Response.css";
import EmptyResponse from "./EmptyResponse/EmptyResponse";

const Response = ({ response }) => {
  const drawResponse = (responseData) => {
    if (
      typeof responseData !== "undefined" &&
      Object.keys(responseData).length !== 0
    ) {
      return (
        <div className={styles.response}>
          <div className={styles.inline}>
            <div className={styles.half}>
              {responseData.customer && (
                <Customer customer={responseData.customer} />
              )}
              {responseData.order && <Order order={responseData.order} />}
            </div>
            {responseData.order && responseData.order.lines && (
              <div className={styles.half}>
                <Lines lines={responseData.order.lines} />
              </div>
            )}
          </div>
        </div>
      );
    }
    return <EmptyResponse />;
  };

  return <>{drawResponse(response)}</>;
};

Response.propTypes = {
  response: PropTypes.object,
};

Response.defaultProps = {
  response: {},
};

export default Response;
