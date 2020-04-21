import React, {useState} from "react";
import PropTypes from "prop-types";

import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

import {smallResponse} from "data/response";
import Button from 'src/blocks/Button/Button';

const InputJSON = (props) => {

  const [responseJSON, setResponseJSON] = useState(smallResponse); 
  
  return (
    <div>
      <JSONInput
        id={props.type || "response"}
        placeholder={responseJSON}
        locale={locale}
        height="75vh"
        width="100%"
        onChange={(e) => setResponseJSON(e.jsObject)}
      />
      <Button action={() => props.setJSON(responseJSON)} type='TEXT' size='sizeAuto'>Показать</Button>
    </div>
  );
};

InputJSON.propTypes = {};

export default InputJSON;
