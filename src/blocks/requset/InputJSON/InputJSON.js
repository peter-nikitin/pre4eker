import React, { useState } from "react";
import PropTypes from "prop-types";

import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";


import Button from "src/blocks/Button/Button";

import style from "./InputJSON.css";

const InputJSON = (props) => {
  const [responseJSON, setResponseJSON] = useState(props.responseJSON);

  return (
    <div>
        <JSONInput
          id={props.type || "response"}
          placeholder={responseJSON}
          locale={locale}
          height="68vh"
          width="100%"
          onChange={(e) => setResponseJSON(e.jsObject)}
        />
      <Button
        action={() => props.setJSON(responseJSON)}
        type="TEXT"
        size="sizeFull"
      >
        Показать
      </Button>
    </div>
  );
};

InputJSON.propTypes = {};

export default InputJSON;
