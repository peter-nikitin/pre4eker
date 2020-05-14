import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Input from "src/components/Input/Input";
import Button from "src/components/Button/Button";

import Customer from "../Customer/Customer";
import Order from "../Order/Order";
import Lines from "../Lines/Lines";

import orderTypes from "../Order/orderTypes";

import style from "./RequestForm.css";

const RequestForm = ({ requestJSON, handleSubmit, setRequestJSON }) => {
  const [orderType, setOrderType] = useState(orderTypes[0]);
  const [orderBody, setOrderBody] = useState();
  const [orderCustomFields, setOrderCustomFileds] = useState([]);
  const [orderExternalPromos, setOrderExternalPromo] = useState([]);
  const [promocodes, setPromocodes] = useState([]);
  const [bonusPoints, setbonusPoints] = useState([]);

  const [lines, setLines] = useState([{ number: 1 }]);
  const [selectedLine, changeSelectedLine] = useState(1);

  const [operation, setOperation] = useState(requestJSON.operation);
  const [key, setKey] = useState(requestJSON.key);
  const [endpoint, setEndpoint] = useState(requestJSON.endpoint);
  const [body, setBody] = useState({});

  return (
    <>
      <div className={style.form}>
        <div className={`${style.formGroup}`}>
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
        </div>
        <div className={`${style.formGroup}`}>
          <Customer setRequestJSON={setRequestJSON} requestJSON={requestJSON} />
        </div>
        <div className={`${style.formGroup}`}>
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
        </div>
        <div className={`${style.formGroup}`}>
          <Lines
            lines={lines}
            setLines={setLines}
            selectedLine={selectedLine}
            changeSelectedLine={changeSelectedLine}
          />
        </div>
      </div>
      <Button
        action={() =>
          handleSubmit({
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
    </>
  );
};

RequestForm.defaultProps = {
  requestJSON: {},
};

RequestForm.propTypes = {
  requestJSON: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  setRequestJSON: PropTypes.func.isRequired,
};
export default RequestForm;
