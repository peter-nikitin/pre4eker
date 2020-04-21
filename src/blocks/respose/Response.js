import React from "react";

import Customer from "./Customer/Customer";
import Order from "./Order/Order";
import Lines from "./Lines/Lines";
import stylesShared from "src/blocks/respose/responseShared.css";
import styles from "./Response.css";
import EmptyResponse from "./EmptyResponse/EmptyResponse";

const Response = ({ response }) => {

  const drawResponse = (response) => {
    if (response != null || typeof response !== "undefined") {
      return (
        <div className={styles.response}>
          <div className={styles.inline}>
            <div className={styles.half}>
              {response.customer && <Customer customer={response.customer} />}
              {response.order && <Order order={response.order} />}
            </div>
            {response.order && response.order.lines && (
              <div className={styles.half}>
                <Lines lines={response.order.lines} />
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return <EmptyResponse />;
    }
  };

  return <>{drawResponse(response)}</>;
};

export default Response;
