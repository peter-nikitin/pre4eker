import React, { useState } from "react";
import PropTypes from "prop-types";

import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

import Button from "src/components/Button/Button";

const ResponseJSON = ({ responseJSON, setJSON, type }) => {
  const [currentResponseJSON, setResponseJSON] = useState(responseJSON);

  return (
    <div>
      <JSONInput
        id={type || "response"}
        placeholder={currentResponseJSON}
        locale={locale}
        height="68vh"
        width="100%"
        onChange={(e) => setResponseJSON(e.jsObject)}
      />
      <Button
        action={() => setJSON(currentResponseJSON)}
        type="TEXT"
        size="sizeFull"
      >
        Показать
      </Button>
    </div>
  );
};

ResponseJSON.defaultProps = {
  responseJSON: {},
  type: "",
};

ResponseJSON.propTypes = {
  responseJSON: PropTypes.object,
  setJSON: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default ResponseJSON;
