import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";

import IdField from "../IdField/IdField";

import style from "./Customer.css";
import customerLookUpOptions from "./customerLookUpOptions";

const Customer = ({ setRequestJSON, requestJSON }) => {
  const { body } = requestJSON;

  let initialCustomer;
  if (typeof body !== "undefined") {
    initialCustomer = body.customer;
  }
  let initialCustomerLookUpOption;
  if (typeof initialCustomer !== "undefined") {
    initialCustomerLookUpOption = customerLookUpOptions.find(
      (item) => item.type === Object.keys(initialCustomer)[0]
    );
  } else {
    [initialCustomerLookUpOption] = customerLookUpOptions;
  }

  const [customerLookUpOption, setcustomerLookUpOption] = useState(
    initialCustomerLookUpOption
  );

  const [customer, setCustomer] = useState({ ...initialCustomer });

  useEffect(() => {
    if (Object.keys(customer).length > 0) {
      setRequestJSON({
        ...requestJSON,
        body: {
          ...body,
          customer: {
            ...customer,
          },
        },
      });
    }
  }, [customer]);

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
            value={customer[customerLookUpOption.type]}
            onChange={(e) =>
              setCustomer({
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
                setCustomer({});
                if (item.type === "none") {
                  const stateWithOutCustomer = requestJSON;
                  delete requestJSON.body.customer;
                  setRequestJSON({
                    ...stateWithOutCustomer,
                  });
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
  requestJSON: PropTypes.object,
  setRequestJSON: PropTypes.func,
};
Customer.defaultProps = {
  requestJSON: {},
  setRequestJSON: () => ({}),
};

export default Customer;
