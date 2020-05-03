import React, { useState } from "react";
import PropTypes from "prop-types";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/webpack-resolver";

import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";

import style from "./RequestJSON.css";

const RequestJSON = ({ data, onSubmit }) => {
  const [body, setBody] = useState(JSON.stringify(data.body, null, 1));
  const [endpoint, setEndpoint] = useState(data.endpoint);
  const [operation, setOperation] = useState(data.operation);
  const [key, setKey] = useState(data.key);

  return (
    <div>
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
      <AceEditor
        name="RequestBody"
        mode="json"
        theme="xcode"
        value={body}
        onChange={(value) => setBody(value)}
        height="58vh"
        width="100%"
        wrapEnabled
        placeholder="Тело ответа"
        highlightActiveLine={false}
        setOptions={{
          showLineNumbers: false,
          tabSize: 2,
        }}
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
};

RequestJSON.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

export default RequestJSON;
