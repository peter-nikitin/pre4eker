import React from "react";
import Customer from "./Customer/Customer";
import Order from "./Order/Order";
import Lines from "./Lines/Lines";
import stylesShared from "src/blocks/respose/responseShared.css";

const Response = (props) => {
  const { customer, order } = props.response;
  

  return (
    <div className={stylesShared.response}>
      <div className={stylesShared.inline}>
        <div className={stylesShared.half}>
          <Customer customer={customer} />
          <Order order={order} />
        </div>
        <div className={stylesShared.half}>
          <Lines lines={order.lines} />
        </div>
      </div>
    </div>
  );
};

export default Response;