import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";

import IdField from "../IdField/IdField";

import style from "./Customer.css";
import customerLookUpOptions from "./customerLookUpOptions";

const Customer = ({ customer, setCustomer }) => {
  const [customerLookUpOption, setcustomerLookUpOption] = useState(
    customerLookUpOptions[0]
  );

  const [customerId, setCustomerId] = useState({});

  let customerField;
  if (
    customerLookUpOption.type !== "none" &&
    customerLookUpOption.type !== "ids"
  ) {
    customerField = (
      <div className={style.inline}>
        <div className={style.half}>
          <Input
            label={customerLookUpOption.name}
            name={customerLookUpOption.type}
            value={customer[customerLookUpOption]}
            onChange={(e) =>
              setCustomer({
                ...customer,
                [customerLookUpOption.type]: e.target.value,
              })
            }
          />
          <p className={style.description}>&nbsp;</p>
        </div>
      </div>
    );
  } else if (customerLookUpOption.type === "ids") {
    customerField = (
      <IdField object={customer} setObject={setCustomer} type="customer" />
    );
  }

  return (
    <>
      <div className={`${style.inline}`}>
        <h2 className={style.h2}>Клиент</h2>
        <div className={` ${style.buttonLine}`}>
          {customerLookUpOptions.map((item) => (
            <Button
              key={item.type}
              type="TEXT"
              active={customerLookUpOption.type === item.type}
              action={() => {
                setcustomerLookUpOption(item);
                if (item.type === "none") {
                  setCustomer({});
                }
              }}
              size="sizeAuto"
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>
      {customerField}
    </>
  );
};

Customer.propTypes = {
  customer: PropTypes.object,
  setCustomer: PropTypes.func,
};
Customer.defaultProps = {
  customer: {},
  setCustomer: () => ({}),
};

export default Customer;
