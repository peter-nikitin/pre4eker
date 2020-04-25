import React from "react";
import PropTypes from "prop-types";

import Customer from "../Customer/Customer";
import Order from "../Order/Order";

const RequestForm = ({ requestForm }) => (
  <div>
    <Customer customer={requestForm.customer} />
    <Order order={requestForm.order} />
  </div>
);

RequestForm.propTypes = {
  requestForm: PropTypes.object.isRequired,
};

export default RequestForm;
