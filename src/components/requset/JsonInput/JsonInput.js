import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import AceEditor from "react-ace";

import Button from "src/components/Button/Button";

// import "ace-builds";
// import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-xcode";
import beautify from "ace-builds/src-noconflict/ext-beautify";

import style from "./JSONInput.css";

import converToJSON from "./xml2json";

const ace = require("ace-builds/src-noconflict/ace");

ace.config.set(
  "basePath",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/"
);
ace.config.setModuleUrl(
  "ace/mode/javascript_worker",
  "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js"
);

const modes = ["json", "xml"];

const JSONInput = ({ onChange, value, name }) => {
  const editor = useRef(null);
  window.editor = editor;

  const [editorMode, handleEditorModeChange] = useState(modes[0]);

  return (
    <div className={style.editor}>
      <div className={style.btnGroup}>
        {modes.map((item) => (
          <Button
            type="TEXT"
            size="sizeAuto"
            action={() => handleEditorModeChange(item)}
            active={editorMode === item}
            key={item}
          >
            {item}
          </Button>
        ))}
      </div>
      <AceEditor
        name={name}
        mode={editorMode}
        theme="xcode"
        ref={editor}
        value={value}
        onChange={(data) => {
          if (data && data !== "") {
            if (editorMode === "xml") {
              console.log(converToJSON(data));
            } else {
              //return onChange(data);
            }
          }
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

JSONInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
};
JSONInput.defaultProps = {
  value: "",
};

export default JSONInput;
