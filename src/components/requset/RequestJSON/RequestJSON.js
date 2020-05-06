import React, { useState } from "react";
import PropTypes from "prop-types";
import loadable from "@loadable/component";
import Loading from "src/components/Loading/Loading";

import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";

import style from "./RequestJSON.css";

const JsonInput = loadable(() => import("../JsonInput/JsonInput"), {
  fallback: <Loading />,
});

const RequestJSON = ({ data, onSubmit }) => {
  const [body, setBody] = useState(JSON.stringify(data.body, null, 1));
  const [endpoint, setEndpoint] = useState(data.endpoint);
  const [operation, setOperation] = useState(data.operation);
  const [key, setKey] = useState(data.key);

  return (
    <>
      <div className={`${style.inline} ${style.inputGroup}`}>
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

      <JsonInput value={body} onChange={setBody} name="RequestBody" />

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
    </>
  );
};

RequestJSON.defaultProps = {
  data: {},
};

RequestJSON.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

export default RequestJSON;
