import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./Customer.css";
import Selector from "../Selector/Selector";

const Customer = ({ customer }) => {
  const [selected, changeSelection] = useState("email");

  return (
    <div>
      <h2 className={style.h2}>Клиент</h2>
      <Selector
        selected={selected}
        options={customer}
        changeSelection={(option) => changeSelection(option)}
      />
    </div>
  );
};

Customer.propTypes = {
  customer: PropTypes.object.isRequired,
};

export default Customer;
