import React, { useRef } from "react";
import PropTypes from "prop-types";

import AceEditor from "react-ace";

// import "ace-builds";
// import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-xcode";

const ace = require("ace-builds/src-noconflict/ace");

ace.config.set(
  "basePath",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/"
);
ace.config.setModuleUrl(
  "ace/mode/javascript_worker",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js"
);

const JsonInput = ({ onChange, value, name }) => {
  const editor = useRef(null);
  window.editor = editor;
  return (
    <div>
      <AceEditor
        name={name}
        mode="json"
        theme="xcode"
        ref={editor}
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
