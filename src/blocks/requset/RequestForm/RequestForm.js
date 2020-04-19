import React from "react";
import PropTypes from "prop-types";

import style from "./RequestForm.css";
import Customer from "../Customer/Customer";
import Order from "../Order/Order";

const RequestForm = ({ requestForm }) => {
  return (
    <div>
      <Customer customer={requestForm.customer} />
      <Order order={requestForm.order} />
    </div>
  );
};

RequestForm.propTypes = {};

export default RequestForm;
