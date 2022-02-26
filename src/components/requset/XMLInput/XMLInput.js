import React from "react";
import PropTypes from "prop-types";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-xml";
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

const XMLInput = ({ value, name, handleBodyChange }) => {
  return (
    <AceEditor
      name={name}
      mode="xml"
      theme="xcode"
      value={value}
      onChange={handleBodyChange}
      height="100%"
      width="100%"
      wrapEnabled
      placeholder="Код тела в XML"
      highlightActiveLine={false}
      setOptions={{
        showLineNumbers: false,
        tabSize: 2,
      }}
    />
  );
};

XMLInput.propTypes = {
  handleBodyChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
};
XMLInput.defaultProps = {
  value: "",
};

export default XMLInput;
