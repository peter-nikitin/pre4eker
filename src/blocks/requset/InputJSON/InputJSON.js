import React from "react";
import PropTypes from "prop-types";

import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

import response from "data/response";

const InputJSON = (props) => {
  return (
    <div>
      <JSONInput
        id={props.type || "response"}
        placeholder={response}
        locale={locale}
        height="85vh"
        width="100%"
        onChange={(e) => props.setJSON(e)}
      />
    </div>
  );
};

InputJSON.propTypes = {};

export default InputJSON;
