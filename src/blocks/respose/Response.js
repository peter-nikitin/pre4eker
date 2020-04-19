import React from "react";
import Customer from "./Customer/Customer";
import Order from "./Order/Order";
import Lines from "./Lines/Lines";
import stylesShared from "src/blocks/respose/responseShared.css";

const Response = ({ response }) => {
  let customer;
  let order;
  if (response) {
    customer = response.customer;
    order = response.order;
  } else {
  }

  return (
    <div className={stylesShared.response}>
      <div className={stylesShared.inline}>
        <div className={stylesShared.half}>
          {customer && <Customer customer={customer} />}
          {order && <Order order={order} />}
        </div>
        {order && order.lines && (
          <div className={stylesShared.half}>
            <Lines lines={order.lines} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Response;
