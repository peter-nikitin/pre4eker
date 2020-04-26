import React, { useState } from "react";
import PropTypes from "prop-types";

import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";

import style from "./RequestJSON.css";

const RequestJSON = ({ data, onSubmit, type }) => {
  const [body, setResponseJSON] = useState(data.body);
  const [endpoint, setEndpoint] = useState(data.endpoint);
  const [operation, setOperation] = useState(data.operation);
  const [key, setKey] = useState(data.key);

  console.log(data);

  return (
    <div>
      <div className={`${style.inline} ${style.inputGroup}`}>
        <div className={style.third}>
          <Input
            label="Эндпоин"
            name="endpoint"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
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
      <JSONInput
        id={type || "response"}
        placeholder={body}
        locale={locale}
        height="58vh"
        width="100%"
        onChange={(e) => setResponseJSON(e.jsObject)}
      />
      <Button
        action={() =>
          onSubmit({
            endpoint,
            key,
            body,
            operation,
          })
        }
        type="TEXT"
        size="sizeFull"
      >
        Показать
      </Button>
    </div>
  );
};

RequestJSON.defaultProps = {
  data: {},
  type: "",
};

RequestJSON.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default RequestJSON;
