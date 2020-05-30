import React from "react";
import PropTypes from "prop-types";

import Customer from "../Customer/Customer";
import Order from "../Order/Order";
import Lines from "../Lines/Lines";
import styles from "../Response.css";

const SuccessResponse = ({ responseData }) => {
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
};

SuccessResponse.propTypes = {
  responseData: PropTypes.object.isRequired,
};

export default SuccessResponse;
