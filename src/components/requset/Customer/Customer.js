import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";

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
    );
  } else if (customerLookUpOption.type === "ids") {
    customerField = (
      <div className={style.inline}>
        <div className={style.half}>
          <Input
            label="Идентификатор"
            name="customerIdField"
            value={customerId.idField}
            onChange={(e) =>
              setCustomerId({
                ...customerId,
                idField: e.target.value,
              })
            }
          />
          <p className={style.description}>
            Можно указать свое название идентификатора клиента
          </p>
        </div>
        <div className={style.half}>
          <Input
            label="Значение"
            name="customerIdValue"
            value={customerId.IdValue}
            onChange={(e) => {
              setCustomerId({
                ...customerId,
                idValue: e.target.value,
              });
              if (customerId.idField && customerId.idValue) {
                setCustomer({
                  [customerId.idField]: customerId.idValue,
                });
              }
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <>
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
