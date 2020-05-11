import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";

import Customer from "../Customer/Customer";
import Order from "../Order/Order";
import Lines from "../Lines/Lines";
import customerLookUpOptions from "../Customer/customerLookUpOptions";
import orderTypes from "../Order/orderTypes";

import style from "./RequestForm.css";

const RequestForm = ({ data, onSubmit }) => {
  const [customer, setCustomer] = useState();

  const [orderType, setOrderType] = useState(orderTypes[0]);
  const [orderBody, setOrderBody] = useState();
  const [orderCustomFields, setOrderCustomFileds] = useState([]);
  const [orderExternalPromos, setOrderExternalPromo] = useState([]);
  const [promocodes, setPromocodes] = useState([{ number: 1 }]);
  const [bonusPoints, setbonusPoints] = useState([{ number: 1 }]);

  const [lines, setLines] = useState([{ number: 1 }]);
  const [selectedLine, changeSelectedLine] = useState(1);

  const [operation, setOperation] = useState(data.operation);
  const [key, setKey] = useState(data.key);
  const [endpoint, setEndpoint] = useState(data.endpoint);
  const [body, setBody] = useState(JSON.stringify(data.body, null, 1));

  console.log({
    customer: { ...customer },
    order: {
      ...orderBody,
      customFields: [...orderCustomFields],
      externalPromo: [...orderExternalPromos],
    },
    promocodes: [...promocodes],
    bonusPoints: [...bonusPoints],
    lines: [...lines],
  });

  return (
    <div className={style.form}>
      <div className={`${style.inline}`}>
        <div className={style.third}>
          <Input
            label="Эндпоин"
            name="endpoint"
            onChange={(e) => setEndpoint(e.target.value)}
            value={endpoint}
          />
        </div>
        <div className={style.third}>
          <Input
            label="Секретный ключ"
            name="key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            type="password"
          />
        </div>
        <div className={style.third}>
          <Input
            label="Операция"
            name="operation"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          />
        </div>
      </div>
      <Customer customer={customer} setCustomer={setCustomer} />
      <Order
        orderType={orderType}
        setOrderType={setOrderType}
        orderBody={orderBody}
        setOrderBody={setOrderBody}
        orderCustomFields={orderCustomFields}
        setOrderCustomFileds={setOrderCustomFileds}
        orderExternalPromos={orderExternalPromos}
        setOrderExternalPromo={setOrderExternalPromo}
        promocodes={promocodes}
        setPromocodes={setPromocodes}
        bonusPoints={bonusPoints}
        setbonusPoints={setbonusPoints}
      />
      <Lines
        lines={lines}
        setLines={setLines}
        selectedLine={selectedLine}
        changeSelectedLine={changeSelectedLine}
      />
      <br />
      <Button
        action={() =>
          onSubmit({
            endpoint,
            key,
            body: JSON.parse(body),
            operation,
          })
        }
        type="TEXT"
        size="sizeFull"
      >
        Рассчитать скидки
      </Button>
    </div>
  );
};

RequestForm.defaultProps = {
  data: {},
};

RequestForm.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};
export default RequestForm;
