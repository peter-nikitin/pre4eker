import React from "react";
import PropTypes from "prop-types";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/webpack-resolver";

const JsonInput = ({ onChange, value, name }) => {
  return (
    <div>
      <AceEditor
        name={name}
        mode="json"
        theme="xcode"
        value={value}
        onChange={(data) => {
          onChange(data);
        }}
        height="100%"
        width="100%"
        wrapEnabled
        placeholder="Тело ответа"
        highlightActiveLine={false}
        setOptions={{
          showLineNumbers: false,
          tabSize: 2,
        }}
      />
    </div>
  );
};

JsonInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
};
JsonInput.defaultProps = {
  value: "",
};

export default JsonInput;
