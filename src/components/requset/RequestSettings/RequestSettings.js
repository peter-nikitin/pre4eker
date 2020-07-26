import React from "react";
import PropTypes from "prop-types";

import Input from "src/components/Input/Input";

import style from "./RequestSettings.css";

const RequestSettings = ({ requestJSON, setRequestJSON }) => {
  return (
    <div className={`${style.inline}`}>
      <Input
        label="Эндпоин"
        name="endpoint"
        className={style.third}
        onChange={(e) =>
          setRequestJSON({
            ...requestJSON,
            endpoint: e.target.value,
          })
        }
        value={requestJSON.endpoint}
      />
      <Input
        label="Секретный ключ"
        name="key"
        value={requestJSON.key}
        className={style.third}
        onChange={(e) =>
          setRequestJSON({
            ...requestJSON,
            key: e.target.value,
          })
        }
        type="text"
      />
      <Input
        label="Операция"
        name="operation"
        className={style.third}
        onChange={(e) =>
          setRequestJSON({
            ...requestJSON,
            operation: e.target.value,
          })
        }
        value={requestJSON.operation}
      />
    </div>
  );
};

RequestSettings.propTypes = {
  requestJSON: PropTypes.object,
  setRequestJSON: PropTypes.func,
  setKey: PropTypes.func,
  keyValue: PropTypes.string,
};
RequestSettings.defaultProps = {
  requestJSON: {},
  setRequestJSON: () => ({}),
  setKey: () => ({}),
  keyValue: "",
};

export default RequestSettings;
