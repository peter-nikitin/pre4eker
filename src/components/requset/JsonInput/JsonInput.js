import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import Button from "src/components/Button/Button";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-xcode";

import style from "./JSONInput.css";

const ace = require("ace-builds/src-noconflict/ace");

ace.config.set(
  "basePath",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/"
);
ace.config.setModuleUrl(
  "ace/mode/javascript_worker",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js"
);

const JSONInput = ({ onChange, value, name }) => {
  const editor = useRef(null);
  window.editor = editor;

  const handleChange = (data) => {
    if (editorMode === "xml" && data.length > 0) {
      try {
        const jsonFromxml = xml2json(data);
        return onChange(jsonFromxml);
      } catch (error) {
        console.log(error);
      }
    }
    return onChange(data);
  };

  return (
    <AceEditor
      name={name}
      mode="json"
      theme="xcode"
      ref={editor}
      value={value}
      onChange={onChange}
      height="100%"
      width="100%"
      wrapEnabled
      placeholder="Код тела"
      highlightActiveLine={false}
      setOptions={{
        showLineNumbers: false,
        tabSize: 2,
      }}
    />
  );
};

JSONInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
};
JSONInput.defaultProps = {
  value: "",
};

export default JSONInput;
