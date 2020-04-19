import React from "react";
import PropTypes from "prop-types";

import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

import {smallResponse} from "data/response";

const InputJSON = (props) => {
  return (
    <div>
      <JSONInput
        id={props.type || "response"}
        placeholder={smallResponse}
        locale={locale}
        height="75vh"
        width="100%"
        onChange={(e) => props.setJSON(e.jsObject)}
      />
    </div>
  );
};

InputJSON.propTypes = {};

export default InputJSON;
